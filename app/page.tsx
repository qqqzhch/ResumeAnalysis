"use client";
import Image from "next/image";
import { If, Else } from "react-if";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import Fileupload from "@/components/ui/component/Fileupload";
import Loading from "@/components/ui/component/Loading";
import AnalyzeResults from '@/components/ui/component/AnalyzeResults'
import CustomerDemand from '@/components/ui/component/CustomerDemand'
import { Button } from "@/components/ui/button"

export default function Home() {
  

  const { isloading } = useAppSelector((state) => state.resume);



  return (
    <main className="p-2">
       <div>
      <Button>Click me</Button>
    </div>
      {/*拖拽文件 */}
      <Fileupload></Fileupload>

<If condition={isloading}>
  {/*loading*/}
  <Loading></Loading>
</If>
<Else>
  {/*显示结果 */}
  <div className=" flex">
     <div className=" flex-1">
     <AnalyzeResults></AnalyzeResults>
     </div>
     <div className=" w-1/3">
     <CustomerDemand ></CustomerDemand>
     </div>
 
  
  </div>
  
</Else>
    </main>
  );
}
