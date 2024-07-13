"use client";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CornerDownLeft, Mic, Paperclip } from "lucide-react";

import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { useCallback, useState, useMemo } from "react";
import OpenAI from "openai";
import type { ChatCompletionUserMessageParam } from "@/chatype";
import markdownit from "markdown-it";
import { If, Else, Then } from "react-if";
import Loading from "@/components/component/Loading";
const md = markdownit();

const client = new OpenAI({
  apiKey: "sk-nWxJb52vhgGpiBlFLYKNnchBXnYAAuoRbBGVj6xKCIvHM859",
  baseURL: "https://api.moonshot.cn/v1",
  dangerouslyAllowBrowser: true,
});

export default function Dashboard() {
  let history = [
    {
      role: "system",
      content:
        "你是 Kimi，由 Moonshot AI 提供的人工智能助手，你更擅长中文和英文的对话，现在你是一名人力资源专家。你会为用户提供安全，有帮助，准确的回答。同时，你会拒绝一切涉及恐怖主义，种族歧视，黄色暴力等问题的回答。Moonshot AI 为专有名词，不可翻译成其他语言。",
    },
  ];
  const [value, setValue] = useState<string>("");
  const [Result, setResult] = useState<string>("");
  const [isloading, setLoading] = useState<boolean>(false);
  async function chat(prompt: string) {
    history.push({
      role: "user",
      content: prompt,
    });
    const completion = await client.chat.completions.create({
      model: "moonshot-v1-32k",
      messages: history as Array<ChatCompletionUserMessageParam>,
      stream: true,
    });
    return completion;
  }
  const btnClick = useCallback(async () => {
    const qa = `根据职位描述求进行分析，并回答如下问题
    1 这则招聘信息的职位描述对求职者有那些要求。
    2 从职位描述中提取10个技能关键词，如果职位描述中，没有技能关键词，根据跟岗位名称，找10个和这个和岗位有关的技能关键词。
      并对每个技能关键词进行解释说明，
    3 给面试官推荐10个问题，面试官在面试的时候用。
    在<content><content>之间的为只为描述 
    <content>${value}</content>
    返回格式为markdown,要求返回的markdown格式美观漂亮
    `;
    setResult('')
    setLoading(true)
    const reply = await chat(qa);
    setLoading(false)
    for await (const chunk of reply) {
      console.log(chunk.choices[0].delta.content);
      if (
        chunk.choices[0].delta.content !== undefined &&
        chunk.choices[0].delta.content !== null
      ) {
        setResult((pre) => {
          return (pre + chunk.choices[0].delta.content) as string;
        });
      }
    }

  }, [value,setLoading]);

  const showHmtl = useMemo(() => {
    return md.render(Result);
  }, [Result]);

  return (
    <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
      <div
        className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
        x-chunk="dashboard-03-chunk-1"
      >
        <TooltipProvider>
          <Label htmlFor="message" className="sr-only">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="输入招聘需求或照片网站上的职位描述"
            className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
          />
          <div className="flex items-center p-3 pt-0">
            {/* <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Paperclip className="size-4" />
                  <span className="sr-only">Attach file</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">Attach File</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Mic className="size-4" />
                  <span className="sr-only">Use Microphone</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">Use Microphone</TooltipContent>
            </Tooltip> */}
            <Button onClick={btnClick} type="submit" size="sm" className="ml-auto gap-1.5">
              点击分析
              <CornerDownLeft className="size-3.5" />
            </Button>
          </div>
        </TooltipProvider>
      </div>
      <div className="flex-1">
        <If condition={isloading}>
          <Then>
            <Loading></Loading>
          </Then>
          <Else>
          <div dangerouslySetInnerHTML={{ __html: showHmtl }}></div>            
          </Else>

        </If>

      </div>
    </div>
  );
}
