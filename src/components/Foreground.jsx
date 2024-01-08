import React,{useRef} from 'react';
import Card from './Card';

function Foreground() {
  
  const ref = useRef(null)

   const data= [
    {
     description: "Some of the documents that were uploaded on Tuesday",
     filesize:".9mb",
     close:false,
     tag:{ isOpen: true, tagTitle: "Download Now", tagColor:"green"},
    },
    {
      description: "File containing all the docs related to Clients project.",
      filesize:"1.4mb",
      close:false,
      tag:{ isOpen: true, tagTitle: "Download Now", tagColor:"green"},
     },
     {
      description: "This file is related to the project reports.",
      filesize:"2.4mb",
      close:true,
      tag:{ isOpen: true, tagTitle: "Upload", tagColor:"blue"},
     },
  ]

  return (
    <>
       <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full p-5 flex gap-5 flex-wrap' >
         {
          data.map((item, index) => (
            <Card data={item} reference={ref} />
          ))
         }
       </div>
    </>
  )
}

export default Foreground