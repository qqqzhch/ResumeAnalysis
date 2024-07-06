import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {useEffect} from "react";
import {setData,setIsloading,setKey } from '@/lib/slices/resumeSlice'
import OpenAI from "openai";
import localforage from "localforage";
import Image from 'next/image';



const client = new OpenAI({
    apiKey: "sk-nWxJb52vhgGpiBlFLYKNnchBXnYAAuoRbBGVj6xKCIvHM859",
    baseURL: "https://api.moonshot.cn/v1",
    dangerouslyAllowBrowser: true,
  });


export default function Fileupload() {
    let history = [
        {
          role: "system",
          content:
            "你是 Kimi，由 Moonshot AI 提供的人工智能助手，你更擅长中文和英文的对话，现在你是一名人力资源专家。你会为用户提供安全，有帮助，准确的回答。同时，你会拒绝一切涉及恐怖主义，种族歧视，黄色暴力等问题的回答。Moonshot AI 为专有名词，不可翻译成其他语言。",
        },
      ];

  
  const dispatch = useAppDispatch()

      // 拖拽进入时的事件处理
  const handleDragOver = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // 拖拽离开时的事件处理
  const handleDragLeave = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
  };

  // 放置文件时的事件处理
  const handleDrop = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(event);
    console.log(event.dataTransfer.files);
    const file = event.dataTransfer.files[0];
    DocumentProcessing(file);
  };

  async function handleFileChange(event: any) {
    const file = event.target.files[0];
    DocumentProcessing(file);
  }


  async function DocumentProcessing(file: File) {
    dispatch(setIsloading(true))
    dispatch(setData(''))
    const key = file.name + file.lastModified;
    dispatch(setKey(key))
    console.log(file);
    const file_content = (await getFileContent(file)) as string;

    history.push({
      role: "system",
      content: file_content,
    });
    const msg: string = `
    1 整理这份简历中的 姓名，性别，联系方式，求职岗位，所在地，分析简历信息判断求职者的等级这是初级、中级、高级，求职者的预期薪资是多少？
    2 这个岗位行业薪资范围一般在多少？
    3 判断这个求职者能否满足这个岗位的基本要求
    返回格式为markdown,要求返回的markdown格式美观漂亮`;
    console.log(msg);
    let reply = await chat(msg);
    
    dispatch(setIsloading(false))
    dispatch(setData(reply as string))
    console.log(reply);
  }

  async function getFileContent(file: File) {
    const key = file.name + file.lastModified;
    console.log(file);
    const value = await localforage.getItem(key);
    if (value) {
      return value;
    }
    let file_object = await client.files.create({
      file: file,
      purpose: "file-extract",
    });
    let file_content = await (
      await client.files.content(file_object.id)
    ).text();
    // console.log(file_content);
    localforage.setItem(key, file_content);
    return file_content;
  }

  
  async function chat(prompt: string) {
    history.push({
      role: "user",
      content: prompt,
    });
    const completion = await client.chat.completions.create({
      model: "moonshot-v1-32k",
      messages: history,
    });
    history = history.concat(completion.choices[0].message);
    return completion.choices[0].message.content;
  }



  return (
    <div>
        {/*拖拽文件 */}
        <label
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              for="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col  items-center justify-center pt-5 pb-6">
               <Image  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" width={80} height={80} priority src={'/upload.svg'}  />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                onChange={handleFileChange}
                id="dropzone-file"
                type="file"
                className="hidden"
              />
            </label>
    </div>
  );
}