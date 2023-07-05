"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Profile from '@components/Profile'

const MyProfile = () => {
    const { data:session } = useSession()
    const [prompts, setPrompts] = useState([]);
    const handleEdit = () => {

    }
    const handleDelete = async () => {

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