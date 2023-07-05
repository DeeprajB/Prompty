"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"

import Profile from '@components/Profile'

const GenProfile = ({ params }) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const name = searchParams.get('name')
    const [prompts, setPrompts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch(`/api/users/${params.id}/prompts`);
        const data = await response.json();

        setPrompts(data);
      };

    useEffect(() => {
        fetchPosts();
    }, []);
  return (
    <Profile
        name={`${name}'s`}
        desc={`Welcome to ${name}'s profile page.`}
        data={prompts}
    />
  )
}

export default GenProfile