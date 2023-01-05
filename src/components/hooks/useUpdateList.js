import React, { useEffect } from 'react'
import useManageUser from './useManageUser'

const useUpdateList = () => {
    const {getResources}=useManageUser({
        endpoint:'data'
      })
      
      
      useEffect(()=>{
      getResources()
      },[])
}

export default useUpdateList