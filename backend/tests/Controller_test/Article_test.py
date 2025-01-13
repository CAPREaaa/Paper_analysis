import pytest
from httpx import AsyncClient,ASGITransport
from fastapi.testclient import TestClient 
from fastapi import FastAPI

import os
import sys
src_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../..', 'src'))
sys.path.append(src_dir)
from src.main import app  
import pandas as pd
from src.controller.Article import *

@pytest.mark.asyncio
async def test_is_retracted():
    async with AsyncClient(app=app, base_url="http://test") as client:
        df = pd.DataFrame({"status":"ok","message-type":"work","message-version":"1.0.0","message":{"indexed":{"date-parts":[[2024,3,25]],"date-time":"2024-03-25T18:43:28Z","timestamp":1711392208888},"publisher-location":"New York, NY, USA","type":"no-retraction","reference-count":3,"publisher":"ACM","license":[{"start":{"date-parts":[[2018,11,6]],"date-time":"2018-11-06T00:00:00Z","timestamp":1541462400000},"content-version":"vor","delay-in-days":365,"URL":"http:\/\/www.acm.org\/publications\/policies\/copyright_policy#Background"}],"funder":[{"DOI":"10.13039\/100004316","name":"International Business Machines Corporation","doi-asserted-by":"publisher","award":["Faculty Award (Research)"]},{"DOI":"10.13039\/100000181","name":"Air Force Office of Scientific Research","doi-asserted-by":"publisher","award":["FA9550-14-1-0173"]},{"DOI":"10.13039\/100000001","name":"National Science Foundation","doi-asserted-by":"publisher","award":["1737978"]}],"content-domain":{"domain":["dl.acm.org"],"crossmark-restriction":"true"},"short-container-title":[],"published-print":{"date-parts":[[2017,11,6]]},"DOI":"10.1145\/3132847.3132886","type":"proceedings-article","created":{"date-parts":[[2017,11,6]],"date-time":"2017-11-06T13:30:29Z","timestamp":1509975029000},"update-policy":"http:\/\/dx.doi.org\/10.1145\/crossmark-policy","source":"Crossref","is-referenced-by-count":110,"title":["FUSION"],"prefix":"10.1145","author":[{"given":"Ahsanul","family":"Haque","sequence":"first","affiliation":[{"name":"University of Texas at Dallas, Richardson, TX, USA"}]},{"given":"Zhuoyi","family":"Wang","sequence":"additional","affiliation":[{"name":"University of Texas at Dallas, Richardson, TX, USA"}]},{"given":"Swarup","family":"Chandra","sequence":"additional","affiliation":[{"name":"University of Texas at Dallas, Richardson, TX, USA"}]},{"given":"Bo","family":"Dong","sequence":"additional","affiliation":[{"name":"University of Texas at Dallas, Richardson, TX, USA"}]},{"given":"Latifur","family":"Khan","sequence":"additional","affiliation":[{"name":"University of Texas at Dallas, Richardson, TX, USA"}]},{"given":"Kevin W.","family":"Hamlen","sequence":"additional","affiliation":[{"name":"University of Texas at Dallas, Richardson, TX, USA"}]}],"member":"320","published-online":{"date-parts":[[2017,11,6]]},"reference":[{"key":"e_1_3_2_1_1_1","doi-asserted-by":"publisher","DOI":"10.1145\/1656274.1656287"},{"key":"e_1_3_2_1_2_1","doi-asserted-by":"publisher","DOI":"10.1080\/095400996116839"},{"key":"e_1_3_2_1_3_1","doi-asserted-by":"publisher","DOI":"10.1145\/1015330.1015425"}],"event":{"name":"CIKM '17: ACM Conference on Information and Knowledge Management","location":"Singapore Singapore","acronym":"CIKM '17","sponsor":["SIGWEB ACM Special Interest Group on Hypertext, Hypermedia, and Web","SIGIR ACM Special Interest Group on Information Retrieval"]},"container-title":["Proceedings of the 2017 ACM on Conference on Information and Knowledge Management"],"original-title":[],"link":[{"URL":"https:\/\/dl.acm.org\/doi\/pdf\/10.1145\/3132847.3132886","content-type":"application\/pdf","content-version":"vor","intended-application":"syndication"},{"URL":"https:\/\/dl.acm.org\/doi\/pdf\/10.1145\/3132847.3132886","content-type":"unspecified","content-version":"vor","intended-application":"similarity-checking"}],"deposited":{"date-parts":[[2023,1,6]],"date-time":"2023-01-06T01:55:37Z","timestamp":1672970137000},"score":1,"resource":{"primary":{"URL":"https:\/\/dl.acm.org\/doi\/10.1145\/3132847.3132886"}},"subtitle":["An Online Method for Multistream Classification"],"short-title":[],"issued":{"date-parts":[[2017,11,6]]},"references-count":3,"alternative-id":["10.1145\/3132847.3132886","10.1145\/3132847"],"URL":"http:\/\/dx.doi.org\/10.1145\/3132847.3132886","relation":{},"published":{"date-parts":[[2017,11,6]]},"assertion":[{"value":"2017-11-06","order":2,"name":"published","label":"Published","group":{"name":"publication_history","label":"Publication History"}}]}})
        assert is_retracted(df) == False

@pytest.mark.asyncio
def test_datetime():
        df = pd.DataFrame({"status":"ok","message-type":"work","message-version":"1.0.0","message":{"indexed":{"date-parts":[[2024,3,25]],"date-time":"2024-03-25T18:43:28Z","timestamp":1711392208888},"publisher-location":"New York, NY, USA","type":"no-retraction","reference-count":3,"publisher":"ACM","license":[{"start":{"date-parts":[[2018,11,6]],"date-time":"2018-11-06T00:00:00Z","timestamp":1541462400000},"content-version":"vor","delay-in-days":365,"URL":"http:\/\/www.acm.org\/publications\/policies\/copyright_policy#Background"}],"funder":[{"DOI":"10.13039\/100004316","name":"International Business Machines Corporation","doi-asserted-by":"publisher","award":["Faculty Award (Research)"]},{"DOI":"10.13039\/100000181","name":"Air Force Office of Scientific Research","doi-asserted-by":"publisher","award":["FA9550-14-1-0173"]},{"DOI":"10.13039\/100000001","name":"National Science Foundation","doi-asserted-by":"publisher","award":["1737978"]}],"content-domain":{"domain":["dl.acm.org"],"crossmark-restriction":"true"},"short-container-title":[],"published-print":{"date-parts":[[2017,11,6]]},"DOI":"10.1145\/3132847.3132886","type":"proceedings-article","created":{"date-parts":[[2017,11,6]],"date-time":"2017-11-06T13:30:29Z","timestamp":1509975029000},"update-policy":"http:\/\/dx.doi.org\/10.1145\/crossmark-policy","source":"Crossref","is-referenced-by-count":110,"title":["FUSION"],"prefix":"10.1145","author":[{"given":"Ahsanul","family":"Haque","sequence":"first","affiliation":[{"name":"University of Texas at Dallas, Richardson, TX, USA"}]},{"given":"Zhuoyi","family":"Wang","sequence":"additional","affiliation":[{"name":"University of Texas at Dallas, Richardson, TX, USA"}]},{"given":"Swarup","family":"Chandra","sequence":"additional","affiliation":[{"name":"University of Texas at Dallas, Richardson, TX, USA"}]},{"given":"Bo","family":"Dong","sequence":"additional","affiliation":[{"name":"University of Texas at Dallas, Richardson, TX, USA"}]},{"given":"Latifur","family":"Khan","sequence":"additional","affiliation":[{"name":"University of Texas at Dallas, Richardson, TX, USA"}]},{"given":"Kevin W.","family":"Hamlen","sequence":"additional","affiliation":[{"name":"University of Texas at Dallas, Richardson, TX, USA"}]}],"member":"320","published-online":{"date-parts":[[2017,11,6]]},"reference":[{"key":"e_1_3_2_1_1_1","doi-asserted-by":"publisher","DOI":"10.1145\/1656274.1656287"},{"key":"e_1_3_2_1_2_1","doi-asserted-by":"publisher","DOI":"10.1080\/095400996116839"},{"key":"e_1_3_2_1_3_1","doi-asserted-by":"publisher","DOI":"10.1145\/1015330.1015425"}],"event":{"name":"CIKM '17: ACM Conference on Information and Knowledge Management","location":"Singapore Singapore","acronym":"CIKM '17","sponsor":["SIGWEB ACM Special Interest Group on Hypertext, Hypermedia, and Web","SIGIR ACM Special Interest Group on Information Retrieval"]},"container-title":["Proceedings of the 2017 ACM on Conference on Information and Knowledge Management"],"original-title":[],"link":[{"URL":"https:\/\/dl.acm.org\/doi\/pdf\/10.1145\/3132847.3132886","content-type":"application\/pdf","content-version":"vor","intended-application":"syndication"},{"URL":"https:\/\/dl.acm.org\/doi\/pdf\/10.1145\/3132847.3132886","content-type":"unspecified","content-version":"vor","intended-application":"similarity-checking"}],"deposited":{"date-parts":[[2023,1,6]],"date-time":"2023-01-06T01:55:37Z","timestamp":1672970137000},"score":1,"resource":{"primary":{"URL":"https:\/\/dl.acm.org\/doi\/10.1145\/3132847.3132886"}},"subtitle":["An Online Method for Multistream Classification"],"short-title":[],"issued":{"date-parts":[[2017,11,6]]},"references-count":3,"alternative-id":["10.1145\/3132847.3132886","10.1145\/3132847"],"URL":"http:\/\/dx.doi.org\/10.1145\/3132847.3132886","relation":{},"published":{"date-parts":[[2017,11,6]]},"assertion":[{"value":"2017-11-06","order":2,"name":"published","label":"Published","group":{"name":"publication_history","label":"Publication History"}}]}})
        response=datetime(df)
        assert response == '2017-11-06T13:30:29Z'

@pytest.mark.asyncio
async def test_refrences():
    async with AsyncClient(app=app, base_url="http://test") as client:
        df = pd.DataFrame({"status":"ok","message-type":"work","message-version":"1.0.0","message":{"indexed":{"date-parts":[[2024,3,25]],"date-time":"2024-03-25T18:43:28Z","timestamp":1711392208888},"publisher-location":"New York, NY, USA","type":"no-retraction","reference-count":3,"publisher":"ACM","license":[{"start":{"date-parts":[[2018,11,6]],"date-time":"2018-11-06T00:00:00Z","timestamp":1541462400000},"content-version":"vor","delay-in-days":365,"URL":"http:\/\/www.acm.org\/publications\/policies\/copyright_policy#Background"}],"funder":[{"DOI":"10.13039\/100004316","name":"International Business Machines Corporation","doi-asserted-by":"publisher","award":["Faculty Award (Research)"]},{"DOI":"10.13039\/100000181","name":"Air Force Office of Scientific Research","doi-asserted-by":"publisher","award":["FA9550-14-1-0173"]},{"DOI":"10.13039\/100000001","name":"National Science Foundation","doi-asserted-by":"publisher","award":["1737978"]}],"content-domain":{"domain":["dl.acm.org"],"crossmark-restriction":"true"},"short-container-title":[],"published-print":{"date-parts":[[2017,11,6]]},"DOI":"10.1145\/3132847.3132886","type":"proceedings-article","created":{"date-parts":[[2017,11,6]],"date-time":"2017-11-06T13:30:29Z","timestamp":1509975029000},"update-policy":"http:\/\/dx.doi.org\/10.1145\/crossmark-policy","source":"Crossref","is-referenced-by-count":110,"title":["FUSION"],"prefix":"10.1145","author":[{"given":"Ahsanul","family":"Haque","sequence":"first","affiliation":[{"name":"University of Texas at Dallas, Richardson, TX, USA"}]},{"given":"Zhuoyi","family":"Wang","sequence":"additional","affiliation":[{"name":"University of Texas at Dallas, Richardson, TX, USA"}]},{"given":"Swarup","family":"Chandra","sequence":"additional","affiliation":[{"name":"University of Texas at Dallas, Richardson, TX, USA"}]},{"given":"Bo","family":"Dong","sequence":"additional","affiliation":[{"name":"University of Texas at Dallas, Richardson, TX, USA"}]},{"given":"Latifur","family":"Khan","sequence":"additional","affiliation":[{"name":"University of Texas at Dallas, Richardson, TX, USA"}]},{"given":"Kevin W.","family":"Hamlen","sequence":"additional","affiliation":[{"name":"University of Texas at Dallas, Richardson, TX, USA"}]}],"member":"320","published-online":{"date-parts":[[2017,11,6]]},"reference":[{"key":"e_1_3_2_1_1_1","doi-asserted-by":"publisher","DOI":"10.1145\/1656274.1656287"},{"key":"e_1_3_2_1_2_1","doi-asserted-by":"publisher","DOI":"10.1080\/095400996116839"},{"key":"e_1_3_2_1_3_1","doi-asserted-by":"publisher","DOI":"10.1145\/1015330.1015425"}],"event":{"name":"CIKM '17: ACM Conference on Information and Knowledge Management","location":"Singapore Singapore","acronym":"CIKM '17","sponsor":["SIGWEB ACM Special Interest Group on Hypertext, Hypermedia, and Web","SIGIR ACM Special Interest Group on Information Retrieval"]},"container-title":["Proceedings of the 2017 ACM on Conference on Information and Knowledge Management"],"original-title":[],"link":[{"URL":"https:\/\/dl.acm.org\/doi\/pdf\/10.1145\/3132847.3132886","content-type":"application\/pdf","content-version":"vor","intended-application":"syndication"},{"URL":"https:\/\/dl.acm.org\/doi\/pdf\/10.1145\/3132847.3132886","content-type":"unspecified","content-version":"vor","intended-application":"similarity-checking"}],"deposited":{"date-parts":[[2023,1,6]],"date-time":"2023-01-06T01:55:37Z","timestamp":1672970137000},"score":1,"resource":{"primary":{"URL":"https:\/\/dl.acm.org\/doi\/10.1145\/3132847.3132886"}},"subtitle":["An Online Method for Multistream Classification"],"short-title":[],"issued":{"date-parts":[[2017,11,6]]},"references-count":3,"alternative-id":["10.1145\/3132847.3132886","10.1145\/3132847"],"URL":"http:\/\/dx.doi.org\/10.1145\/3132847.3132886","relation":{},"published":{"date-parts":[[2017,11,6]]},"assertion":[{"value":"2017-11-06","order":2,"name":"published","label":"Published","group":{"name":"publication_history","label":"Publication History"}}]}})
        response=refrences(df)
        assert response == ['10.1145\\/1656274.1656287', '10.1080\\/095400996116839', '10.1145\\/1015330.1015425']

@pytest.mark.asyncio
async def test_metadata_by_title_and_authors():
    async with AsyncClient(app=app, base_url="http://test") as client:
        title = "FUSION"
        authors = "Haque"
        response = await metadata_by_title_and_authors(title, authors)
        
        assert response["DOI"]=="10.1109/iemcon.2017.8117170"


@pytest.mark.asyncio
async def test_metadata():
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await metadata("10.1145/3132847.3132886")
        
        # Assertions to check if the returned data matches the mocked metadata
        assert response.doi =='10.1145/3132847.3132886' 
        assert response.title == 'FUSION'
        assert response.authors[0].first_name == 'Ahsanul'



# @pytest.mark.asyncio
# async def test_edit_article():
#     async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as client:
#         key="ml"
#         response= await article_with_references_via_key(key)
#         # Assertions to check if the returned data matches the mocked metadata
#         assert response.doi ==True













