import React from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css'


const Authentication = () => {
  return (
    <div className='container-authentication font-radiocanada flex h-screen'>
        <div className='container1 flex flex-col bg-darkwhite rounded-xl my-12 px-14 py-6'>
            <h1 className='text-4xl font-semibold tracking-wide text-center'>Novel Corner</h1>
            <div className='mt-8 flex flex-col'>
                <h2 className='font-semibold text-xl'>Sign in</h2>
                <div className='btn-group'>
                    <div className='outline rounded-md shadow-md mt-4 p-2 max-w-md'>
                        <button className='bg-transparent'>
                            Continue with Google 
                        </button>
                    </div>
                    <div className='outline rounded-md shadow-md mt-4 p-2 max-w-md'>
                        <button className='bg-transparent'>  
                            Continue with Github
                        </button>
                    </div>
                </div>
            </div>
            <div className='divider flex my-12 items-center justify-center'>
                <span className="border-1 h-0.5 w-40 bg-grey"></span>
                <p className="mx-4">or</p>
                <span className="border-1 h-0.5 w-40 bg-grey"></span>
            </div>
                <div className='mb-4'>
                    <p className='font-semibold'>Email Address:</p>
                    <form>
                        <input className='bg-beige rounded-md outline-none p-2 w-full max-w-md'></input>
                    </form>
                </div>
                <div className='mb-4'>
                    <p className='font-semibold'>Password:</p>
                    <form>  
                        <input type="password" className='bg-beige rounded-md outline-none p-2 w-full max-w-md'></input>
                    </form>
                </div>
                <button className='w-full max-w-md hover:bg-darkblue bg-mainblue text-white rounded-xl my-8 p-2'>
                    Sign In
                </button>
                <a href="/authentication/forgotpassword" className='hover:text-mainblue hover:underline'> Forgot Your Password? </a>
                <a href="/authentication/createaccount" className='hover:text-mainblue hover:underline mb-8'> Create a new account </a>
        </div>
    </div>
)}

export default Authentication