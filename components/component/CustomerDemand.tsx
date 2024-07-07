import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import OpenAI from "openai";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import { useCallback, useEffect, useState,useMemo } from "react";
import localforage from "localforage";
import markdownit from "markdown-it";
import { If, Else, Then } from "react-if";


const md = markdownit();

const client = new OpenAI({
    apiKey: "sk-nWxJb52vhgGpiBlFLYKNnchBXnYAAuoRbBGVj6xKCIvHM859",
    baseURL: "https://api.moonshot.cn/v1",
    dangerouslyAllowBrowser: true,
  });

  const history = [
    {
      role: "system",
      content:
        "你是 Kimi，由 Moonshot AI 提供的人工智能助手，你更擅长中文和英文的对话，现在你是一名人力资源专家。你会为用户提供安全，有帮助，准确的回答。同时，你会拒绝一切涉及恐怖主义，种族歧视，黄色暴力等问题的回答。Moonshot AI 为专有名词，不可翻译成其他语言。",
    },
  ];

export default function () {
    const { key } = useAppSelector((state) => state.resume);
    const [data,setData]=useState<string>('')
    const [demand,setDemand]=useState<string>('')
    const [resMD,setresMD]=useState<string>('')
    

      

  useEffect (()=>{
    async function getFileContent() {
       
        const value = await localforage.getItem(key) as string;
        if (value) {
            
            setData(value)
        }
     
      }
      getFileContent()

 },[key])

 async function chat(prompt: string,fileconetent:string) {
    const historyList= [...history,{
        role: "system",
        content: fileconetent,
      },{
        role: "user",
        content: `客户需求为 ${prompt},根据客户需求分析这份简历。
        1 列举那些满足客户需求？
        2 列举出那些不满足客户需求？
        3 分析这份简历满足客户需求的概率为多少？
        要求返回格式为markdown,且markdown格式美观漂亮`,
      }]

    const completion = await client.chat.completions.create({
      model: "moonshot-v1-32k",
      messages: historyList,
    });
    return completion.choices[0].message.content;
  }

  const btnclick=useCallback(async ()=>{
   console.log('---')
   const res= await  chat(demand,data)
   if(res){
    setresMD(res)
   }
   

  },[data,demand])

  let showHmtl = useMemo(() => {
    return md.render(resMD);
  }, [resMD]);
  console.log('key',key)
  return (
    <>
    <If condition={key!==''}>
        <Then>
        <div className="grid w-full gap-2">
    <h3 className="mb-4  text-lg font-extrabold leading-none tracking-tight text-gray-900 ">
        客户需求
      </h3>

      <Textarea onChange={(e)=>{setDemand(e.currentTarget.value)}} placeholder="Type your message here." />
      <div>
      <Button onClick={btnclick} >分析简历是否满足客户需求</Button>
      </div>
      
      <div dangerouslySetInnerHTML={{ __html: showHmtl }}></div>
    </div>
        </Then>
    
    
    </If>
    </>
    
   
    
  );
}
