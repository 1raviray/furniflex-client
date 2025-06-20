import axios from 'axios'
import { useEffect, useState } from 'react'

const useGetApi = (api) => {

    const [Data,SetData]=useState([])
    useEffect(()=>{
        axios.get(api)
        .then((e)=>SetData(e.data))
        .catch((e)=>console.log(e))
    },[])

  return Data
}

export default useGetApi