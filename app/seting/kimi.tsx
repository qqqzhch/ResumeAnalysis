import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

const Kimi = () => {
    return (
        <Card>
            <CardHeader>
              <CardTitle>Kimi key 设置[kimi有免费的 token额度 足够个人使用]</CardTitle>
              <CardDescription>
                设置的key 数据存储在您的浏览器中，仅你供您自己使用
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">
                  服务器地址
                  Endpoint（默认使用国内的服务器，如果国内使用不了，建议试试国外的服务器）{" "}
                </Label>
                <RadioGroup defaultValue="https://api.moonshot.cn" className=" flex row">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="https://api.moonshot.cn" id="r1" />
                    <Label htmlFor="r1">https://api.moonshot.cn[国内]</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="https://api-sg.moonshot.ai" id="r2" />
                    <Label htmlFor="r2">https://api-sg.moonshot.ai[国外]</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">API Key</Label>
                <Input id="username"  placeholder="请输入key" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>保存</Button>
            </CardFooter>
            <Separator className="my-4" />
            <div className="space-y-1 mx-1 px-1 mb-2">
              <h4 className="text-sm font-medium leading-none">什么是 Kimi?</h4>
              <p className="text-sm text-muted-foreground">kimi 是一个由月之暗面科技有限公司开发的人工智能助手。我擅长中英文对话，能够处理长文本、翻译、编写代码等任务。我还可以阅读和解析文件内容，比如TXT、PDF、Word文档、PPT幻灯片和Excel电子表格</p>
            </div>

            <div className="flex h-5 items-center space-x-4 text-sm   mx-1 px-1 mb-4">
              <div> <a href="https://www.moonshot.cn/" target="_blank">访问kimi官网</a></div>
              <Separator orientation="vertical" />
              <div><a href="https://kimi.moonshot.cn/" target="_blank">注册kimi</a></div>
              <Separator orientation="vertical" />
              <div>在kimi开放平台获取api key</div>
            </div>
          </Card>
    );
};

export default Kimi;