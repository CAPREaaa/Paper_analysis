/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useEffect, useState } from 'react';
import Table from '@/app/components/Table';
import Graph from '@/app/components/Graph';
import SearchBar from '@/app/components/SearchBar';
import { useSearchParams } from 'next/navigation';
import { Article } from '@/app/types';
import { Suspense } from 'react';


export default function SearchResultPage(): React.FC {
    const route = useSearchParams();

    const [articles, setArticles] = useState<Article[]>([]);
    const [graphData, setGraphData] = useState<any[]>([]);
    const[aspect, setAspect] = useState<string>('')
    const [isLoading, setIsLoading] = useState(true);

    const handleSearch = async (aspect: string, term: string) => {
        setIsLoading(true);
        console.log("I am handling the search - ", aspect, term)
        if (term && aspect) {
            console.log("Preparing fetching!")
            const res = await fetch('http://localhost:8000/api/v1/result?' + aspect.toLowerCase() + '=' + encodeURIComponent(term), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (res.ok) {
                const data = await res.json();
                setArticles(data.articles);
                setAspect(aspect)
                if(data.graph_data){
                    setGraphData(data.graph_data)
                }
                setIsLoading(false);
                if(data.articles.length <5 && aspect === 'keyword'){
                    alert('Can not get enough data for the cluster graph.');
                }
                
            }
            else {
                alert('Failed to search data! Please try with different search term.');
                
            }
        }
    }

    useEffect(() => {
        setArticles([]);
        setIsLoading(true);
        const aspect = route.get('aspect') || 'key';
        const term = route.get('term') || '';
        handleSearch(aspect, term);
        console.log(aspect, term)
    }, []);

    return (
        <section className="relative">
            <div className="pt-12 pb-8 md:pt-24 md:pb-12">
                <div className="max-w-3xl mx-auto text-center pb-0 md:pb-0">
                    <h1 className="h2 pb-8">Search Results</h1>
                    <SearchBar onSearch={handleSearch} term={route.get('term') || ''} />
                </div>
                <div className="relative max-w-8xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col sm:flex-row h-screen pt-8">
                        <div className="w-1/3 flex justify-center">
                            {isLoading ?
                                <div className='w-full h-full flex items-center justify-center'>
                                    <div className='w-12 h-12 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin'></div>
                                </div>
                                :
                                <Table data={articles} />
                            }
                        </div>
                        <div className="w-px bg-gray-200 sm:block hidden mx-auto rounded-full shadow"></div>
                        <div className="w-2/3 flex justify-center items-center">
                            {isLoading ?
                                <div className='w-full h-full flex items-center justify-center'>
                                    <div className='w-12 h-12 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin'></div>
                                </div>
                                :
                                <Graph data={articles} additionalData={aspect} graphData={graphData}/>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};