import React from 'react'
import {LoginLink} from '@kinde-oss/kinde-auth-nextjs/components'
import { Button } from '@/components/ui/button'
const LoginPage = () => {
  return (
    <div className='h-dvh flex flex-col items-center gap-6 text-4xl p-4'>
        <Button>
            <LoginLink> Sign In</LoginLink>
        </Button>
    </div>
  )
}

export default LoginPage