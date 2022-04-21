import React from 'react';
import Layout from '../components/Layout';
import Input from "../components/Input";
import Button from '../components/Button';
import Link from 'next/link';

const login = () => {
    return (
        <Layout>
            <div className="w-1/3 m-auto p-4">
                <div className='text-center	text-4xl font-bold mb-2'>
                    Student
                </div>

                <div className='w-3/4 m-auto mt-2'>
                    <Input child={"Enter your email"} type="email" name="Email" />
                    <Input child={"Enter your password"} type="password" name="Password" />
                </div>

                <div className='w-1/4 m-auto p-4'>
                    <Button width="w-full">
                        Login
                    </Button>
                </div>

                <div className='text-center'>
                    {"Don't have a account ?"}
                    <Link href="/signup">  Signup</Link>
                </div>
                
            </div>
        </Layout>
    );
};

export default login;