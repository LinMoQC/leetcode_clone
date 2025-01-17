import React from 'react';

type ResetPasswordProps = {

};

const ResetPassword: React.FC<ResetPasswordProps> = () => {

    return <form action="" className='space-y-6 px-6 py-4'>
        <h3 className='text-xl font-medium text-white'>Reset Password</h3>
        <p className='text-sm text-white'>
        Forgetten your password ? Enter your email address below, and we&apos;ll send you an email allowing you to reset it.
        </p>
        <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>
            Your Email
        </label>
        <input type="email" name="email" id="email" className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white' placeholder='name@company.com' />

        <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-amber-500 hover:bg-amber-400'>
            Reset Password
        </button>
    </form>
}
export default ResetPassword;