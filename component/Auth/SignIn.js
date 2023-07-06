'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
const SignIn = ({callbackUrl}) => {

  return (
    <div>
     <h2>Sign in with next auth</h2>
     {/* google login */}
     <div style={{margin:'30px 0'}}>
         <button onClick={()=>signIn('google',{callbackUrl})}>
             continue with google
         </button>
     </div>

    </div>
  )
}

export default SignIn
