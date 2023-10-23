import { Toaster } from 'react-hot-toast'
import LoginForm from './components/LoginForm'
import LoginHero from './components/LoginHero'

export default function Home() {
  return (
    <>
      <main className='flex min-h-screen'>
        <LoginHero />
        <div className='w-full h-screen max-w-md xl:max-w-[50%] px-10 flex items-center justify-center mx-auto'>
          <LoginForm />
        </div>
      </main>
      <Toaster position='top-right' toastOptions={{ className: 'text-xs' }} />
    </>
  )
}
