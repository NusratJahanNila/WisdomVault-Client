import { Link, useLocation, useNavigate } from 'react-router'
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../hooks/useAuth'
import { toast } from 'react-hot-toast'
import { TbFidgetSpinner } from 'react-icons/tb'
import { imageUpload, saveOrUpdateUser } from '../../utils'
import { useForm } from 'react-hook-form'
import logo from '../../assets/WisdomVault.png'


const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle, loading } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state || '/'

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const password = watch("password");

  // Form submit
  const onSubmit = async (data) => {
    const { name, image, email, password } = data;
    // image file
    const imageFile = image[0];

    try {
      // 1.upload img
      const imageURL = await imageUpload(imageFile);

      //2. User Registration
      const result = await createUser(email, password)

      // save or update user via signup
      await saveOrUpdateUser({ name, email, image: imageURL })


      //3. Save username & profile photo
      await updateUserProfile(
        name,
        imageURL
      )
      console.log(result)

      navigate(from, { replace: true })
      toast.success('Signup Successful')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
  }

  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      //User Registration using google
      const result = await signInWithGoogle()
      console.log(result)

      // save or update user via signup
      await saveOrUpdateUser({
        name: result?.user?.displayName,
        email: result?.user?.email,
        image: result?.user?.photoURL
      })

      navigate(from, { replace: true })
      toast.success('Signup Successful')
    } catch (err) {
      console.log(err)
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
              Start Your Wisdom Journey
            </h1>
            
            <p className='text-lg text-white/90 mb-10'>
              Join a community where experiences become lessons, and lessons become growth. Your story matters.
            </p>

            {/* Features List */}
            <div className='space-y-6 mb-10'>
              {[
                { icon: '📝', text: 'Share life lessons & personal growth insights' },
                { icon: '🔒', text: 'Control privacy of your wisdom' },
                { icon: '⭐', text: 'Access premium community content' },
                { icon: '💬', text: 'Connect with like-minded individuals' }
              ].map((feature, index) => (
                <div key={index} className='flex items-center gap-4'>
                  <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center'>
                    <span className='text-lg'>{feature.icon}</span>
                  </div>
                  <span className='text-white/90'>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className='flex gap-8 mt-8'>
              <div className='text-center'>
                <div className='text-2xl font-bold'>5K+</div>
                <div className='text-sm text-white/80'>Members</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold'>25K+</div>
                <div className='text-sm text-white/80'>Lessons</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold'>4.9★</div>
                <div className='text-sm text-white/80'>Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className='lg:w-1/2 p-6 lg:p-12 flex items-center justify-center'>
          <div className='w-full max-w-md'>
            <div className='mb-8 text-center lg:text-left'>
              <h2 className='text-3xl font-bold text-gray-800 dark:text-white mb-2'>
                Create Account
              </h2>
              <p className='text-gray-600 dark:text-gray-400'>
                Join our community of wisdom seekers
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
              <div className='space-y-4'>
                {/* Name */}
                <div>
                  <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    {...register('name', {
                      required: 'Name is required',
                      maxLength: {
                        value: 20,
                        message: "Name must be within 20 characters"
                      }
                    })}
                    placeholder='John Doe'
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 dark:border-gray-600 focus:border-[#F69074] focus:ring-2 focus:ring-[#F69074]/20'
                    } bg-white dark:bg-gray-800 dark:text-white transition-colors duration-200`}
                  />
                  {errors.name && (
                    <p className='mt-1 text-sm text-red-500 dark:text-red-400 flex items-center gap-1'>
                      <span>⚠️</span> {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
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
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Please enter a valid email'
                      }
                    })}
                    placeholder='john@example.com'
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

                {/* Password */}
                <div>
                  <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                    Password
                  </label>
                  <input
                    type='password'
                    id='password'
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters'
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                        message: 'Must include uppercase, lowercase, number & special character'
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
                  
                  {/* Password Requirements */}
                  <div className='mt-3 space-y-1'>
                    <div className='text-xs text-gray-500 dark:text-gray-400'>Password must contain:</div>
                    <div className='flex flex-wrap gap-2'>
                      {[
                        { label: '6+ characters', check: password?.length >= 6 },
                        { label: 'Uppercase', check: /[A-Z]/.test(password) },
                        { label: 'Lowercase', check: /[a-z]/.test(password) },
                        { label: 'Number', check: /\d/.test(password) },
                        { label: 'Special', check: /[@$!%*?&]/.test(password) }
                      ].map((req, idx) => (
                        <span 
                          key={idx} 
                          className={`text-xs px-2 py-1 rounded-full ${
                            req.check 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                              : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                          }`}
                        >
                          {req.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Profile Image */}
                <div>
                  <label htmlFor='image' className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
                    Profile Image <span className='text-gray-500 dark:text-gray-400 text-xs'>(Optional)</span>
                  </label>
                  <div className='flex items-center gap-4'>
                    <div className='w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600'>
                      <span className='text-gray-400 dark:text-gray-500 text-sm'>Image</span>
                    </div>
                    <div className='flex-1'>
                      <input
                        {...register('image')}
                        type='file'
                        id='image'
                        accept='image/*'
                        className='w-full text-sm text-gray-500 dark:text-gray-400
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-lg file:border-0
                          file:text-sm file:font-medium
                          file:bg-[#F69074]/10 file:text-[#F69074] dark:file:bg-[#F69074]/20 dark:file:text-[#F69074]
                          hover:file:bg-[#F69074]/20
                          bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer
                          focus:outline-none focus:ring-2 focus:ring-[#F69074] focus:border-[#F69074]
                          py-2 transition-colors duration-200'
                      />
                      <p className='mt-1 text-xs text-gray-500 dark:text-gray-400'>
                        PNG, JPG, JPEG (max 2MB)
                      </p>
                    </div>
                  </div>
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
                    Creating Account...
                  </>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                  Or sign up with
                </span>
              </div>
            </div>

            {/* Google Sign In */}
            <button
              onClick={handleGoogleSignIn}
              className='flex justify-center items-center gap-3 w-full py-3 px-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 font-medium mb-6'
            >
              <FcGoogle size={24} />
              <span className="text-gray-700 dark:text-gray-300">
                Continue with Google
              </span>
            </button>

            {/* Login Link */}
            <div className='text-center'>
              <p className='text-gray-600 dark:text-gray-400 text-sm'>
                Already have an account?{' '}
                <Link
                  to='/login'
                  state={from}
                  className='font-semibold text-[#02A2A2] dark:text-[#A0EBEB] hover:underline transition-colors duration-200'
                >
                  Log in here
                </Link>
              </p>
            </div>

            {/* Terms */}
            <p className='text-xs text-gray-500 dark:text-gray-400 text-center mt-6'>
              By creating an account, you agree to our{' '}
              <Link to='/terms' className='text-[#02A2A2] dark:text-[#A0EBEB] hover:underline'>
                Terms
              </Link>{' '}
              and{' '}
              <Link to='/privacy' className='text-[#02A2A2] dark:text-[#A0EBEB] hover:underline'>
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp