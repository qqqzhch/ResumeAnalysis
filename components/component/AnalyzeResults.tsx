import markdownit from "markdown-it";
import { useState, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
const md = markdownit();

export default function AnalyzeResults() {
    const { resume } = useAppSelector((state) => state.resume);
    
    let showHmtl = useMemo(() => {
        return md.render(resume);
      }, [resume]);

  return (
    <div dangerouslySetInnerHTML={{ __html: showHmtl }}></div>
  );
}