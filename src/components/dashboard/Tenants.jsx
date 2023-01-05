import React,{useEffect} from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'

const Tenants = () => {
    const {responseData,getResources} =useOutletContext()
   
    
    useEffect(()=>{
    getResources()
    },[])

  return (
    <div className="flex flex-col items-center justify-between w-full h-full flex-1 text-light-purple">
     
    <Outlet context={{responseData,getResources}} />
  </div>
  )
}

export default Tenants