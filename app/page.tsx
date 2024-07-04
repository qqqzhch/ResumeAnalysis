"use client";
import Image from "next/image";
import { If, Else } from "react-if";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import Fileupload from "@/component/Fileupload";
import Loading from "@/component/Loading";
import AnalyzeResults from '@/component/AnalyzeResults'


export default function Home() {
  

  const { isloading } = useAppSelector((state) => state.resume);



  return (
    <main className="p-2">
      {/*拖拽文件 */}
      <Fileupload></Fileupload>

<If condition={isloading}>
  {/*loading*/}
  <Loading></Loading>
</If>
<Else>
  {/*显示结果 */}
  <AnalyzeResults></AnalyzeResults>
</Else>
    </main>
  );
}
