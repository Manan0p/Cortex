import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import {auth, githubProvider, googleProvider} from '../utils/firebase'

function App() {

  const googleLogin=async()=>{
    const data = await signInWithPopup(auth, googleProvider)
    console.log(data)
  }
  const githubLogin=async()=>{
    const data = await signInWithPopup(auth, githubProvider)
    console.log(data)
  }
  return (
    <div className='flex justify-center items-center h-screen gap-4'>
      <button onClick={googleLogin} className='text-2xl bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600'>
        Continue with google
      </button>
      <button onClick={githubLogin} className='text-2xl bg-black text-white p-2 rounded-full cursor-pointer hover:bg-black-600'>
        Continue with github
      </button>
    </div>
  )
}

export default App