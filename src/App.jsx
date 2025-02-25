import { useState } from 'react'
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

function App() {

  return (
    <>
      <h2>hello world</h2>
      <button className=' bg-amber-300 w-36 py-2 rounded-3xl'
      onClick={()=>{toast("hello")}}>
        click
      </button>
      <button className="btn btn-active btn-secondary"
      onClick={()=>{Swal.fire("SweetAlert2 is working!");}}>Secondary</button>
    </>
  )
}

export default App
