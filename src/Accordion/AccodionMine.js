"use client"
import React from "react";

const AccordianItem=({heading,content,body,activeAccordianItemNo,index,fnClick})=>{
           
    return <>
       <h3 onClick={()=>fnClick(index)} className="text-white bg-primary cursor-pointer">{heading}</h3>
       {activeAccordianItemNo==index && <h5>{content}</h5>}
    </>
}
export const AccordianMine=({data,title})=>{
    const [activeAccordianItemNo,setActiveAccordianItemNo]=React.useState(0);
    const fnClick=(accordianItemNo)=>{
        if(activeAccordianItemNo==accordianItemNo){
            setActiveAccordianItemNo(-1)
        }else{
            setActiveAccordianItemNo(accordianItemNo)
        }
    }
    return <>
        <h1>{title}</h1>
        {
            data?.map((obj,index)=>{
                return <AccordianItem key={index} {...obj} fnClick={fnClick} index={index} activeAccordianItemNo={activeAccordianItemNo} />
            })
        }
    </>
}


