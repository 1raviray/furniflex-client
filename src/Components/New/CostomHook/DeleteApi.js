import axios from 'axios'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';


const useDeleteApi = (api,e) => {
    const Deleteapidata=()=>{
        axios.delete(api,e)
        .then(toast("Successfully Deleted"))
        .catch((e)=>console.log(e))
    }
  return (Deleteapidata())
}

export default useDeleteApi