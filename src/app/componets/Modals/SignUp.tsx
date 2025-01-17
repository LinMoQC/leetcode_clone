import { authModalState } from '@/atoms/authModalAtom';
import React from 'react';
import { useSetRecoilState } from 'recoil';

type SignUpProps = {

};

const SignUp: React.FC<SignUpProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState)

    const handleClick = (type: "login" | "register" | "forgotPassword") => {
        setAuthModalState((prev) => ({...prev, type}));
    }

    return <form action="" className='space-y-6 px-6 py-4'>
        <h3 className='text-xl font-medium text-white'>Register in to LeetCode</h3>
        <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>
            Email
        </label>
        <input type="email" name="email" id="email" className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white' placeholder='name@company.com' />

        <label htmlFor="displayName" className='text-sm font-medium block mb-2 text-gray-300'>
            Display Name
        </label>
        <input type="displayName" name="displayName" id="displayName" className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white' placeholder='LinMO' />

        <label htmlFor="password" className='text-sm font-medium block mb-2 text-gray-300'>
            Password
        </label>
        <input type="password" name="password" id="password" className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white' placeholder='******' />
        <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-amber-500 hover:bg-amber-400'>
            Register
        </button>
        <div className='text-sm font-medium text-gray-300'>
            Already have an account?
            <a href="#" className='text-blue-700 hover:underline' onClick={()=>handleClick('login')}>
                Log In
            </a>
        </div>
    </form>
}
export default SignUp;