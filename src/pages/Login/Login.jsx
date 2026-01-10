import { Link, Navigate, useLocation, useNavigate } from 'react-router'
import toast from 'react-hot-toast'
import LoadingSpinner from '../../components/Shared/LoadingSpinner'
import useAuth from '../../hooks/useAuth'
import { FcGoogle } from 'react-icons/fc'
import { TbFidgetSpinner } from 'react-icons/tb'
import { saveOrUpdateUser } from '../../utils'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import logo from '../../assets/WisdomVault.png'

const Login = () => {
  const { signIn, signInWithGoogle, loading, user, setLoading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [isDemoLoading, setIsDemoLoading] = useState(false)
  
  const from = location.state || '/'

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    setValue
  } = useForm({
    mode: 'onChange'
  })

  if (loading) return <LoadingSpinner />
  if (user) return <Navigate to={from} replace={true} />

  // form submit handler
  const onSubmit = async (data) => {
    try {
      //User Login
      const result = await signIn(data.email, data.password)
      console.log(result)

      //save or update users via signup
      await saveOrUpdateUser({
        name: result?.user?.displayName,
        email: result?.user?.email,
        image: result?.user?.photoURL
      })

      navigate(from, { replace: true })
      toast.success('Login Successful')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }

  // Demo user login
  const handleDemoUserLogin = async () => {
    setIsDemoLoading(true)
    try {
      setValue('email', 'user@a.com')
      setValue('password', '123456aA!')
      
      const result = await signIn('user@a.com', '123456aA!')
      console.log(result)

      await saveOrUpdateUser({
        name: result?.user?.displayName,
        email: result?.user?.email,
        image: result?.user?.photoURL
      })

      navigate(from, { replace: true })
      toast.success('Demo User Login Successful')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    } finally {
      setIsDemoLoading(false)
    }
  }

  // Demo admin login
  const handleDemoAdminLogin = async () => {
    setIsDemoLoading(true)
    try {
      setValue('email', 'user@c.com')
      setValue('password', '123456aA!')
      
      const result = await signIn('user@c.com', '123456aA!')
      console.log(result)

      await saveOrUpdateUser({
        name: result?.user?.displayName,
        email: result?.user?.email,
        image: result?.user?.photoURL
      })

      navigate(from, { replace: true })
      toast.success('Demo Admin Login Successful')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    } finally {
      setIsDemoLoading(false)
    }
  }

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle()
      console.log(result)
      
      await saveOrUpdateUser({
        name: result?.user?.displayName,
        email: result?.user?.email,
        image: result?.user?.photoURL
      })

      navigate(from, { replace: true })
      toast.success('Login Successful')
    } catch (err) {
      console.log(err)
      setLoading(false)
      toast.error(err?.message)
    }
  }

  return (
    <div className='min-h-screen bg-[#F2FAEF] dark:bg-gray-900 transition-colors duration-300'>
      <div className='flex flex-col lg:flex-row min-h-screen'>
        {/* Left Side - Information Section */}
        <div className='lg:w-1/2 bg-linear-to-br from-[#02A2A2] via-[#02A2A2] to-[#028a8a] dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 p-8 lg:p-12 flex flex-col justify-center text-white'>
          <div className='max-w-lg mx-auto'>
            <Link to='/' className='inline-flex items-center gap-2 mb-10'>
              <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center'>
                <span className='text-xl'>
                  <img src={logo} alt="" />
                </span>
              </div>
              <span className='text-xl font-bold'>Wisdom<span className='text-[#F69074]'>Vault</span></span>
            </Link>

            <h1 className='text-4xl lg:text-5xl font-bold mb-6 leading-tight'>
              Welcome Back
            </h1>
            
            <p className='text-lg text-white/90 mb-10'>
              Continue your journey of wisdom sharing and personal growth. Your insights inspire others.
            </p>

            {/* Benefits List */}
            <div className='space-y-6 mb-10'>
              {[
                { icon: '📊', text: 'Access your personal dashboard' },
                { icon: '💾', text: 'Review your saved lessons' },
                { icon: '👥', text: 'Connect with the community' },
                { icon: '📈', text: 'Track your personal growth' }
              ].map((benefit, index) => (
                <div key={index} className='flex items-center gap-4'>
                  <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center'>
                    <span className='text-lg'>{benefit.icon}</span>
                  </div>
                  <span className='text-white/90'>{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className='mt-8 p-4 bg-white/10 rounded-xl'>
              <p className='italic text-white/90 mb-2'>"This platform changed how I reflect on life experiences. Every lesson shared adds value to someone's journey."</p>
              <p className='text-sm text-white/80'>— Sarah, Community Member</p>
            </div>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className='lg:w-1/2 p-6 lg:p-12 flex items-center justify-center'>
          <div className='w-full max-w-md'>
            <div className='mb-8 text-center lg:text-left'>
              <h2 className='text-3xl font-bold text-gray-800 dark:text-white mb-2'>
                Log In
              </h2>
              <p className='text-gray-600 dark:text-gray-400'>
                Welcome back to WisdomVault
              </p>
            </div>

            {/* Demo Login Buttons */}
            <div className="mb-6 space-y-3">
              <button
                onClick={handleDemoUserLogin}
                disabled={isDemoLoading}
                className="w-full py-3 px-4 bg-linear-to-r from-[#A0EBEB] to-[#02A2A2] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isDemoLoading ? (
                  <TbFidgetSpinner className='animate-spin' />
                ) : (
                  <>
                    <span>👤</span>
                    Login as Demo User
                  </>
                )}
              </button>
              
              <button
                onClick={handleDemoAdminLogin}
                disabled={isDemoLoading}
                className="w-full py-3 px-4 bg-linear-to-r from-[#EDBC98] to-[#F69074] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isDemoLoading ? (
                  <TbFidgetSpinner className='animate-spin' />
                ) : (
                  <>
                    <span>👑</span>
                    Login as Demo Admin
                  </>
                )}
              </button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                  Or continue with email
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
              <div className='space-y-4'>
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    placeholder='your@email.com'
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-[#F69074] focus:ring-2 focus:ring-[#F69074]/20'
                    } bg-white dark:bg-gray-800 dark:text-white transition-colors duration-200`}
                  />
                  {errors.email && (
                    <p className='mt-1 text-sm text-red-500 dark:text-red-400 flex items-center gap-1'>
                      <span>⚠️</span> {errors.email.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <div className='flex justify-between mb-2'>
                    <label htmlFor='password' className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                      Password
                    </label>
                    <button type="button" className="text-xs text-[#02A2A2] dark:text-[#A0EBEB] hover:underline">
                      Forgot password?
                    </button>
                  </div>
                  <input
                    type='password'
                    id='password'
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters'
                      }
                    })}
                    placeholder='••••••••'
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.password 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-[#F69074] focus:ring-2 focus:ring-[#F69074]/20'
                    } bg-white dark:bg-gray-800 dark:text-white transition-colors duration-200`}
                  />
                  {errors.password && (
                    <p className='mt-1 text-sm text-red-500 dark:text-red-400 flex items-center gap-1'>
                      <span>⚠️</span> {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type='submit'
                disabled={loading}
                className='w-full py-3 px-4 bg-linear-to-r from-[#F69074] to-[#EDBC98] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2'
              >
                {loading ? (
                  <>
                    <TbFidgetSpinner className='animate-spin' />
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                  Or sign in with
                </span>
              </div>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className='flex justify-center items-center gap-3 w-full py-3 px-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 font-medium mb-6'
            >
              <FcGoogle size={24} />
              <span className="text-gray-700 dark:text-gray-300">
                Continue with Google
              </span>
            </button>

            <div className='text-center'>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>
                Don't have an account?{' '}
                <Link
                  state={from}
                  to='/signup'
                  className='font-semibold text-[#02A2A2] dark:text-[#A0EBEB] hover:underline transition-colors duration-200'
                >
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login