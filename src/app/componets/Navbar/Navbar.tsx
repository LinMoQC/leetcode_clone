import { authModalState } from '@/atoms/authModalAtom';
import Link from 'next/link';
import React from 'react';
import { useSetRecoilState } from 'recoil';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState)
    const handleClick = () => {
        setAuthModalState((prev) => ({...prev, isOpen: true}))
    }

    return (
        <div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
            <Link href="/" className='flex items-center justify-center h-20'>
                <img src='/logo.png' alt="Logo" className='h-full' />
            </Link>
            <div className="flex items-center">
                <button className='bg-amber-500 text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-amber-500 hover:bg-white hover:border-2 hover:border-b-amber-500 border-2 border-transparent transition duration-300 ease-out'
                    onClick={handleClick}
                >Sign In</button>
            </div>
        </div>
    );
}

export default Navbar;
