from bokeh.models import Plot, Range1d, Circle, HoverTool, BoxZoomTool, ResetTool, MultiLine
from bokeh.plotting import from_networkx, figure, output_file, show
from bokeh.palettes import Spectral4
import networkx as nx
from bokeh.io import output_notebook
from bokeh.embed import components
from fastapi import HTTPException




async def ref_link_graph(type: str, data: dict):

    G = nx.DiGraph()
    articles = data.get("articles", [])
    

    for article in articles:
        G.add_node(article.doi, title=article.title)
        for citation in article.citations:
            G.add_edge(article.doi, citation)
    
  
    plot = figure(title="Article Citation Network", x_range=(-1.1, 1.1), y_range=(-1.1, 1.1),
                  tools="", toolbar_location=None)


    graph = from_networkx(G, nx.spring_layout, scale=2, center=(0,0))


    graph.node_renderer.glyph = Circle(radius=0.1, fill_color=Spectral4[0])
    graph.edge_renderer.glyph = MultiLine(line_color="gray", line_alpha=0.8, line_width=1)
    
    plot.add_tools(HoverTool(tooltips=[("title", "@title")]), BoxZoomTool(), ResetTool())
    plot.renderers.append(graph)
    
    script, div = components(plot)
    return {"script": script, "plot": div}


async def generate_graph(type: str, data: dict):

    if(type == "timeline"):
       pass
    elif(type == "references links"):
       print("===data===", data)
       return await ref_link_graph(type, data)
    elif(type == "authors links"):
       pass
    elif(type == "keywords cluster"):
      pass
    else:
        raise HTTPException(status_code=404, detail=f"Type not found")

    return "Failed to generate graph"
   