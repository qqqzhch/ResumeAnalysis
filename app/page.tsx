"use client";
import Image from "next/image";
import { If, Else, Then } from "react-if";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import Fileupload from "@/components/component/Fileupload";
import Loading from "@/components/component/Loading";
import AnalyzeResults from '@/components/component/AnalyzeResults'
import CustomerDemand from '@/components/component/CustomerDemand'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Home() {
  

  const { isloading } = useAppSelector((state) => state.resume);



  return (
    <main className="p-2">
       <div>
    
    </div>
      {/*拖拽文件 */}
      <Fileupload></Fileupload>

<If condition={isloading}>
  {/*loading*/}
  <Then>
  <Loading></Loading>
  </Then>
  <Else>
  {/*显示结果 */}
  <Tabs defaultValue="account" className=" w-full">
  <TabsList>
    <TabsTrigger value="account">分析结果</TabsTrigger>
    <TabsTrigger value="password">客户需求匹配分析</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
  <AnalyzeResults></AnalyzeResults>
    
    </TabsContent>
  <TabsContent value="password">
  <CustomerDemand ></CustomerDemand>
  </TabsContent>
</Tabs>
  
  
</Else>
  
</If>

    </main>
  );
}
