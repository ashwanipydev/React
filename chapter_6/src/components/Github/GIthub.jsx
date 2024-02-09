import React from 'react'
import { useLoaderData } from 'react-router-dom'
function GIthub() {
  const data = useLoaderData()
  return (
    <div className='h-[80vh] flex items-center'>
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
    <img className="w-full h-48 object-cover" src={data.avatar_url} alt="Card Image" />
    <div className="p-4">
        <p className="text-gray-700">GitHub Follower: {data.followers}.</p>
    </div>
    </div>
    </div>
  )
}

export default GIthub

export const githubInfoLoader = async () =>{
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json()
}