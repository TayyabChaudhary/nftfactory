import Image from 'next/image'
import { Inter } from 'next/font/google'
import LoginAccount from './LoginAccount/LoginAccount'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import Signup from './SignUp/SignUp'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
    <LoginAccount />
  </>
  )
}
