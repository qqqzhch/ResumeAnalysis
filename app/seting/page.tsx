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
import Kimi from "./kimi";
import Ocr from "./ocr";

const page = () => {
  return (
    <div>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">AI Chat Key 设置</TabsTrigger>
          <TabsTrigger value="password">OCR 文件识别 key 设置 </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Kimi></Kimi>
        </TabsContent>
        <TabsContent value="password">
          <Ocr></Ocr>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
