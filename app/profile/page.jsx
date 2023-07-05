"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Profile from '@components/Profile'

const MyProfile = () => {
    const { data:session } = useSession()
    const router = useRouter()
    const [prompts, setPrompts] = useState([]);
    const handleEdit = (prompt) => {
      router.push(`/update-prompt?id=${prompt._id}`)
    }
    const handleDelete = async (prompt) => {
      const hasConfirmed = confirm("Are you sure you want to delete this prompt?")
      if (hasConfirmed) {
        try {
          await fetch(`api/prompt/${prompt._id.toString()}`,{
            method: 'DELETE'
          })
          const filteredPosts = prompts.filter((p) => p._id !== prompt._id)
          setPrompts(filteredPosts)
        } catch (error) {
          console.log(error)
        }
      }
    }
    const fetchPosts = async () => {
        const response = await fetch(`/api/users/${session?.user.id}/prompts`);
        const data = await response.json();

        setPrompts(data);
      };

      useEffect(() => {
        if (session?.user.id) {
            fetchPosts();
        }
      }, []);
  return (
    <Profile
        name="My"
        desc="Welcome to your personalized profile page."
        data={prompts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile