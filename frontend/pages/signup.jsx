import React from 'react';
import Layout from '../components/Layout';
import Input from "../components/Input";
import Button from '../components/Button';
import Link from 'next/link';

const signup = () => {
    return (
        <Layout>
            <div className="w-1/3 m-auto p-4">
                <div className='text-center	text-4xl font-bold mb-2'>
                    Sign Up
                </div>

                <div className='w-3/4 m-auto mt-2'>
                    <Input child={"Enter your name"} type="text" name="Name" />
                    <Input child={"Enter your email"} type="email" name="Email" />
                    <Input child={"Enter your password"} type="password" name="Password" />
                    <Input child={"Re-Enter your password"} type="password"  />
                </div>

                <div className='w-1/4 m-auto p-4'>
                    <Button  width="w-full">
                        Sign Up
                    </Button>
                </div>

                <div className='text-center'>
                    Already have a account ?
                    <Link href="/login">  Login</Link>
                </div>
                
            </div>
        </Layout>
    );
};

export default signup;