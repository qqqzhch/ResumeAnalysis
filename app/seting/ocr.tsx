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

const Ocr = () => {
    return (
        <Card>
            <CardHeader>
              <CardTitle>OCR 文件识别</CardTitle>
              <CardDescription>
              设置的key 数据存储在您的浏览器中，仅你供您自己使用
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Endpoint</Label>
                <Input id="current" type="password" disabled />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">API Key</Label>
                <Input id="new" type="password" disabled />
              </div>
            </CardContent>
            <CardFooter>
              <Button disabled>确定</Button>
            </CardFooter>
          </Card>
    );
};

export default Ocr;