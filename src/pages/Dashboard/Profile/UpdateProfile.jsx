import React from 'react';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { imageUpload, saveOrUpdateUser } from '../../../utils';
import { TbFidgetSpinner } from 'react-icons/tb';
import { useNavigate } from 'react-router';

const UpdateProfile = () => {
    // navigate
    const navigate=useNavigate();
    // react hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // AuthContext
    const { user,updateUserProfile, loading } = useAuth();

    const onSubmit = async (data) => {
        const { name, image } = data;
        // image file
        const imageFile = image[0];
        try {
            const imageURL = await imageUpload(imageFile);

            //Save username & profile photo
            await updateUserProfile(
                name,
                imageURL
            )

            await saveOrUpdateUser({ 
                name, 
                image: imageURL,
                email:user?.email
            })

            toast.success('Profile updated successfully!!')
            
            navigate('/dashboard/profile')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }
    return (
        <div className="hero bg-base-200 min-h-screen dark:bg-gray-900">
            <div className="card w-full max-w-sm shrink-0 shadow-2xl dark:bg-gray-800 dark:border dark:border-gray-700 dark:shadow-gray-900/50">
                <div className="card-body dark:bg-gray-800">
                    <h1 className="text-2xl font-bold text-center text-secondary dark:text-teal-400">Update Profile</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="fieldset">
                            {/* Name */}
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm dark:text-gray-300'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-secondary bg-gray-200 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:outline-teal-400'
                                    data-temp-mail-org='0'
                                    {...register('name', {
                                        maxLength: {
                                            value: 20,
                                            message: "Name must be within 20 character"
                                        }
                                    })}
                                />
                                {errors.name && <p className='text-red-600 text-sm dark:text-red-400'>{errors.name.message}</p>}
                            </div>
                            {/* Image */}
                            <div>
                                <label
                                    htmlFor='image'
                                    className='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'
                                >
                                    Profile Image
                                </label>
                                <input
                                    {...register('image')}
                                    type='file'
                                    id='image'
                                    accept='image/*'
                                    className='block w-full text-sm text-gray-500 dark:text-gray-400
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-lime-50 file:text-secondary dark:file:bg-gray-700 dark:file:text-teal-400
      hover:file:bg-teal-100 dark:hover:file:bg-gray-600
      bg-gray-100 dark:bg-gray-700 border border-dashed border-secondary dark:border-teal-400 rounded-md cursor-pointer
      focus:outline-none focus:ring-2 focus:ring-secondary dark:focus:ring-teal-400 focus:border-secondary dark:focus:border-teal-400
      py-2'
                                />
                                <p className='mt-1 text-xs text-gray-400 dark:text-gray-500'>
                                    PNG, JPG or JPEG (max 2MB)
                                </p>
                            </div>
                            <button
                                type='submit'
                                 className="bg-secondary px-6 py-2 rounded-lg text-white mt-4 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-600"
                            >
                                {loading ? (
                                    <TbFidgetSpinner className='animate-spin m-auto' />
                                ) : (
                                    'Update'
                                )}
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;