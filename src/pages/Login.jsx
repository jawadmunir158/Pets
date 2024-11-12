import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [currentState, setCurrentState] = useState('Sign Up');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        // Validation for Sign Up
        if (currentState === 'Sign Up') {
            if (!name || !email || !password) {
                toast.error('Fill all the fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                toast.error('Check the fields');
                return;
            }

            // Password length validation
            if (password.length < 6) {
                toast.error('Password must be greater than 6 characters');
                return;
            }

            // If all validations pass, show success toast
            toast.success('Sign Up Successful!');
            // Proceed with sign-up (e.g., API call)
            // await signUp({ name, email, password });
        } else {
            // Validation for Login
            if (!email || !password) {
                toast.error('Fill all the fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                toast.error('Check the fields');
                return;
            }

            // Password length validation (optional for login)
            if (password.length < 6) {
                toast.error('Password must be greater than 6 characters');
                return;
            }

            // If all validations pass, show success toast
            toast.success('Login Successful!');
            // Proceed with login (e.g., API call)
            // await login({ email, password });
        }
    };

    return (
        <div>
            <ToastContainer />
            <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
                <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                    <p className='prata-regular text-3xl'>{currentState}</p>
                    <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
                </div>

                {currentState === 'Login' ? '' : (
                    <input
                        type="text"
                        className='w-full px-3 py-2 border border-gray-800'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required={currentState === 'Sign Up'}
                    />
                )}
                <input
                    type="email"
                    className='w-full px-3 py-2 border border-gray-800'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className='w-full px-3 py-2 border border-gray-800'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <div className='w-full flex justify-between text-sm mt-[-8px] '>
                    <p className='cursor-pointer'>Forgot Your Password?</p>
                    {
                        currentState === 'Login'
                            ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
                            : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
                    }
                </div>
                <button className='bg-black text-white font-light px-8 py-2 mt-4'>
                    {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
};

export default Login;