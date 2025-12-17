"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Chrome, Github } from 'lucide-react'
import { handleGoogleSignIn, handleGithubSignIn } from '@/features/auth/actions/signin-actions'

const SignInFormClient = () => {
    return (
        <Card className='w-full max-w-md'>
            <CardHeader className='space-y-1'>
                <CardTitle className="text-2xl font-bold text-center">Sign In</CardTitle>
                <CardDescription className="text-center">
                    Choose a provider to sign in
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <form action={handleGithubSignIn}>
                    <Button type="submit" variant="outline" className="w-full">
                        <Github className="mr-2 h-4 w-4" />
                        Sign in with GitHub
                    </Button>
                </form>
                <form action={handleGoogleSignIn}>
                    <Button type="submit" variant="outline" className="w-full">
                        <Chrome className="mr-2 h-4 w-4" />
                        Sign in with Google
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default SignInFormClient
