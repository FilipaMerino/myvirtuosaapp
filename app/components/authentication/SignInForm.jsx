'use client'
import { useLogin } from '@/app/hooks/auth'
import FormInput from './FormInput'
import { useForm } from 'react-hook-form'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/app/lib/firebase'

const SignInForm = () => {
  const { login, isLoading } = useLogin()
  const { register, handleSubmit, reset } = useForm()
  const [user, loading, error] = useAuthState(auth)

  console.log(user)

  async function handleLogin(data) {
    login({
      email: data.email,
      password: data.password,
    })
    reset()
  }

  if (user) {
    window.location.href = '/blog'
  }

  return (
    <div className="flex flex-col justify-center ">
      <div className="flex justify-center text-4xl ">
        <h1>Sign In</h1>
      </div>

      <div className="flex justify-center p-10">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col justify-center"
        >
          <input
            type="email"
            {...register('email')}
            className="input input-bordered mb-5 text-black"
          />
          <input
            type="password"
            {...register('password')}
            className="input input-bordered mb-5 text-black"
          />

          <input
            type="submit"
            className="btn btn-primary w-full  text-white flex gap-4"
          />
        </form>
      </div>
    </div>
  )
}

export default SignInForm
