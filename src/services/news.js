import {orderBy} from "lodash";

import { _api_key, language, category, articles_url} from '../config/rest_config';


export async function getArticles(){

    try {
        // ars-technica
        let articles = await fetch(`${articles_url}?category=${category}&language=${language}`,{
            headers:{
                'X-API-KEY':_api_key
            }
        });

        let result = await articles.json();
        articles= null;
        console.log("AAARTICLES BIIIITCH");
        console.log(result);
        return orderBy(result.articles,'publishedAt','desc');

    } catch (error) {
        console.log(error);
        throw error
    }
}
