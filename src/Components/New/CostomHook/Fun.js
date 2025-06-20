import React, { useState } from 'react'
import usePostApi from './PostApi'

const Fun = () => {

    const [Name,SetName]=useState('')
    const [Password,SetPassword]=useState('')
    
    const FormSubmit=(e)=>{
        e.preventDefault();
        usePostApi("http://localhost:3010/sample",{Name,Password})
    }

  return (
    <div>
        <form onSubmit={FormSubmit}>
            <input type='text' placeholder='name' value={Name} onChange={(e)=>SetName(e.target.value)} />
            <input type='password' placeholder='Password' value={Password} onChange={(e)=>SetPassword(e.target.value)} />
            <input type='submit' className=' btn btn-primary' />
        </form>
    </div>
  )
}

export default Fun