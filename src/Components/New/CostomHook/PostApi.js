import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const usePostApi = (api,data) => {
    const Postdata=()=>{
        axios.post(api,data)
        .then(toast("Successfully Added"))
        .catch((e)=>console.log(e))
    }

  return (Postdata())
}

export default usePostApi