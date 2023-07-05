"use client"

import { useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"

const PromptCard = ({ prompt, handleTagClick, handleEdit, handleDelete }) => {
    const { data:session } = useSession()
    const pathName = usePathname()
    const router = useRouter()
    const [copied, setCopied] = useState('')
    const handleCopy = () => {
        setCopied(prompt.prompt)
        navigator.clipboard.writeText(prompt.prompt)
        setTimeout(() => setCopied(''), 3000)
    }
    const handleProfileClick = () => {
        if (session?.user.id === prompt.creator._id) {
            router.push('/profile')
        }else{
            router.push(`/profile/${prompt.creator._id}?name=${prompt.creator.username}`)
        }
    }
   return (
    <div className="prompt_card">
        <div className="flex justify-between items-start gap-5">
            <div
                className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
                onClick={handleProfileClick}
            >
                <Image
                    src={prompt.creator.image}
                    alt="User Image"
                    width={40}
                    height={40}
                    className="rounded-full object-contain"
                />
                <div className="flex flex-col">
                    <h3 className="font-satoshi font-semibold text-gray-300">
                        {prompt.creator.username}
                    </h3>
                    <p className="font-inter text-sm text-gray-500">
                        {prompt.creator.email}
                    </p>
                </div>
            </div>
            <div className="copy_btn" onClick={handleCopy}>
                <Image
                    src={copied === prompt.prompt ?
                    '/assets/icons/tick.svg' : '/assets/icons/copy.svg'
                    }
                    alt="Copy/Tick Icon"
                    width={12}
                    height={12}
                />
            </div>
        </div>
        <p className="my-4 font-satoshi text-sm text-white">{prompt.prompt}</p>
        <p
            className={handleTagClick? "font-inter text-sm text-fuchsia-200 cursor-pointer":"font-inter text-sm text-fuchsia-200"}
            onClick={() => handleTagClick && handleTagClick(prompt.tag)}
        >
            {prompt.tag}
        </p>
        {session?.user.id === prompt.creator._id && pathName === '/profile' && (
            <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
                <p
                    className="font-inter text-sm green_gradient cursor-pointer"
                    onClick={handleEdit}
                >
                    Edit
                </p>
                <p
                    className="font-inter text-sm text-red-500 cursor-pointer"
                    onClick={handleDelete}
                >
                    Delete
                </p>
            </div>
        )}
    </div>
  )
}

export default PromptCard