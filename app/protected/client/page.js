'use client'
import React from 'react'
import { useSession } from 'next-auth/react'

const ProtectedClient = () => {
  const {data:session}=useSession();
  console.log({session})
  return (
    <div>
     <h1>This is a <i style={{color:'red'}}>client -side</i>Protected page
     </h1>
     <p>You are logged in as : <b>{session?.user?.name}</b></p>
    </div>
  )
}

export default ProtectedClient
