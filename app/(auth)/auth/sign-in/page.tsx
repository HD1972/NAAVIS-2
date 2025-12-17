import React from 'react'
import Image from 'next/image'
import SignInFormClient from '@/features/auth/components/signin-form-client'

const SignInPage = () => {
    return (
        <div className="flex flex-col items-center gap-8">
            <Image 
                src="/logo.png.png" 
                alt='logo image' 
                height={300} 
                width={300}
            />
            <SignInFormClient />
        </div>
    )
}

export default SignInPage;