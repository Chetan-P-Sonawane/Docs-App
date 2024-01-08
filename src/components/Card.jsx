import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";


function Card({data,reference}) {
  return (
    <>
    <motion.div drag dragConstraints={reference} 
       dragTransition={{ bounceStiffness: 300, bounceDamping: 50 }}
       whileDrag={{ scale: 1.05 }} 
       className='relative flex-shrink-0 w-60 h-80 bg-zinc-600 rounded-[50px] text-white px-8 py-10 overflow-hidden'>

        <FaFileAlt />

        <p className='text-base leading-tight mt-5'>{data.description}</p>
        
        <div className=' footer absolute bottom-0 left-0  w-full  ' >
          <div className='flex items-center justify-between mb-3 px-8  py-3' >
           
            <h5>{data.filesize}</h5>

            <span className='w-7 h-7 bg-zinc-200 rounded-full flex items-center justify-center'>
              {
                data.close ? <IoCloseOutline size='1em' color='#000' /> :
                <LiaDownloadSolid size='0.9em' color='#000' />
              }
              
            </span>
            
          </div>
          {
            data.tag.isOpen && (
              <div className={`tag w-full h-10 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600" } py-7 flex justify-center items-center`}>
             <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
          </div>
            ) 
          }
         
        </div>
    </motion.div>

    </>
  )
}

export default Card