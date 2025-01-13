/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Article } from '@/app/types';


interface GraphProps {
    data: Article[];
    additionalData: string;
    graphData: any[];
}

const Graph = ({ data, additionalData, graphData }: GraphProps) => {
    const chartRef = useRef(null);
    const myChart = useRef(null);

    useEffect(() => {
        if (data && data.length > 0 && additionalData === 'key') {
            const chartDom = chartRef.current;

            myChart.current = echarts.init(chartDom);


            const chartData = data.map(item => {

                const firstAuthorLastName = item.authors?.[0]?.last_name || '';

                const publishYear = item.published_date ? new Date(item.published_date).getFullYear() : '';

                return {
                    name: item.title,
                    draggable: true,
                    value: item.citation_count,
                    category: 'Citation',
                    label: {
                        normal: {
                            show: true,
                            formatter: () => {
                                return `${firstAuthorLastName}, ${publishYear}`;
                            }
                        }
                    },
                };
            });

            const chartLinks = data.slice(1).map(item => ({
                source: item.title,
                target: data[0].title,
            }));


            const option = {
                tooltip: {},
                series: [
                    {
                        type: 'graph',
                        layout: 'force',
                        data: chartData,
                        links: chartLinks,
                        categories: [{ name: 'Article' }, { name: 'Citation' }],
                        roam: true,
                        label: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        },
                        force: {

                            repulsion: 500,
                            edgeLength: [50, 150]
                        }
                    }
                ]
            };

            try {
                myChart.current.setOption(option);

                // Resize chart on container resize
                window.addEventListener('resize', () => {
                    myChart.current.resize();
                });


                return () => {
                    window.removeEventListener('resize', () => {
                        myChart.current.resize();
                    });
                    myChart.current.dispose();
                };

            } catch (error) {
                alert('Can not generate graph.');
            }

        }



        if (data && data.length > 0 && additionalData === 'author') {

            const chartDom = chartRef.current;
            myChart.current = echarts.init(chartDom);

            const nodes = new Map();
            const links = [];

            data.forEach(article => {
                article.authors.forEach(author => {
                    const fullName = author.first_name + ' ' + author.last_name;
                    if (!nodes.has(fullName)) {
                        nodes.set(fullName, {
                            name: fullName,
                            draggable: true,
                            // other properties if needed
                        });
                    }
                });

                // This assumes that an article has a list of authors who worked together
                for (let i = 0; i < article.authors.length; i++) {
                    for (let j = i + 1; j < article.authors.length; j++) {
                        const sourceName = article.authors[i].first_name + ' ' + article.authors[i].last_name;
                        const targetName = article.authors[j].first_name + ' ' + article.authors[j].last_name;

                        links.push({
                            source: sourceName,
                            target: targetName,
                            value: article.doi,
                        });
                    }
                }
            });

            const option = {
                tooltip: {},
                series: [
                    {
                        type: 'graph',
                        layout: 'force',
                        nodes: Array.from(nodes.values()),
                        links: links,
                        categories: [{ name: 'Author' }],
                        roam: true,
                        label: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        },
                        force: {
                            repulsion: 1000,
                            edgeLength: [100, 300]
                        },
                        edgeLabel: {
                            normal: {
                                show: false,
                                formatter: function (params) {
                                    return params.data.value;
                                }
                            }
                        },
                    }
                ]
            };

            try {
                myChart.current.setOption(option);
                // Resize chart on container resize
                window.addEventListener('resize', () => {
                    myChart.current.resize();
                });

                return () => {
                    window.removeEventListener('resize', () => {
                        myChart.current.resize();
                    });
                    myChart.current.dispose();
                };

            } catch (error) {
                alert('Can not generate graph.');
            }


        }


        if (data && data.length > 0 && additionalData === 'keyword') {
            const chartDom = chartRef.current;
            if (chartDom) {
                const myChartInstance = echarts.init(chartDom);

                const colorPalette = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];
                const defaultColor = '#ccc'; // Default color for nodes without a group

                const nodes = graphData.map(article => {
                    const firstAuthorSurname = article.authors && article.authors.length > 0 ? article.authors[0] : 'Unknown';
                    const group = article.group ? article.group : 'Unknown';

                    const groupIndex = typeof article.group === 'number' ? article.group % colorPalette.length : -1;

                    return {
                        id: article.id,
                        name: `Group:${group}, ${firstAuthorSurname}`,
                        tooltip: {
                            show: true,
                            formatter: `{b}: ${article.name}`,
                        },
                        draggable: true,
                        category: article.group?.toString(),
                        value: article.cluster_keywords ? article.cluster_keywords.length : 0,
                        itemStyle: {
                            color: groupIndex !== -1 ? colorPalette[groupIndex] : 'defaultColor',
                        },
                    };
                });


                const links = graphData.filter(item => item.source && item.target)
                    .map(link => ({
                        source: link.source,
                        target: link.target,
                        value: link.value,
                    }));

                const option = {
                    tooltip: {
                        show: true,
                        formatter: function (params) {
                            if (params.data.tooltip && params.data.tooltip.formatter) {
                                return params.data.tooltip.formatter;
                            }

                            return params.name || '';
                        }
                    },
                    series: [
                        {
                            type: 'graph',
                            layout: 'force',
                            data: nodes,
                            links: links,
                            roam: true,
                            label: {
                                show: true,
                                position: 'right',
                                formatter: '{b}'
                            },
                            force: {
                                repulsion: 1000,
                                edgeLength: [100, 300]
                            },
                            edgeLabel: {
                                normal: {
                                    show: false,
                                },
                                emphasis: {
                                    show: true,
                                    formatter: function (params) {
                                        return params.data.value;
                                    }
                                }
                            },
                        }
                    ]
                };
                try {
                    myChartInstance.setOption(option);
                    window.addEventListener('resize', () => {
                        myChartInstance.resize();
                    });

                    return () => {
                        window.removeEventListener('resize', () => {
                            myChartInstance.resize();
                        });
                        myChartInstance.dispose();
                    };
                } catch (error) {
                    alert('Can not generate graph.');
                }





            }


        }

    }, [data, additionalData]);

    return (
        <>
            {data && data.length > 0 ? (
                <div ref={chartRef} className='w-full h-full' id="plot" />
            ) : (
                <div className='w-full h-full flex items-center justify-center'>
                    <div className='w-12 h-12 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin'></div>
                </div>
            )}
        </>
    );
};

export default Graph;
