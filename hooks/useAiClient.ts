import { useEffect, useState } from "react";
import OpenAI from "openai";
import { useAppSelector} from "@/lib/hooks";
import aiConfig from '@/constant/aiconfig'


function  useAiClient():OpenAI {
    const { aiApiName,apiApiValue } = useAppSelector((state) => state.aiConfig);
    const [client,setClient]=useState<OpenAI>()
    useEffect(()=>{
        if(apiApiValue){
            const client = new OpenAI({
                apiKey: apiApiValue.apiKey,
                baseURL: apiApiValue.endPoint,
                dangerouslyAllowBrowser: true,
              });
            setClient(client)
        }else{
            //默认值
            const client = new OpenAI({
                apiKey: aiConfig.apiKey,
                baseURL: aiConfig.baseURL,
                dangerouslyAllowBrowser: true,
              });
              setClient(client)
        }
    },[aiApiName,apiApiValue,aiConfig])

    return client as OpenAI
    
}