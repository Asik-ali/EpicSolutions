import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../Firebase/Firebase';
import AdSenseComponent from '../Adsense/Adsense';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const signup = async () => {
        setLoading(true);

        if (name === '' || email === '' || password === '') {
            toast.error('All fields are required');
            setLoading(false);
            return;
        }

        try {
            const users = await createUserWithEmailAndPassword(auth, email, password);

            // Send email verification
            await sendEmailVerification(users.user);

            const user = {
                name: name,
                uid: users.user.uid,
                email: users.user.email,
                time: Timestamp.now()
            };

            const userRef = collection(db, 'users');
            await addDoc(userRef, user);
            toast.success('Signup Successful. Verification email sent!');
            setName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error(error);

            // Provide more specific error messages
            if (error.code === 'auth/email-already-in-use') {
                toast.error('Email is already in use. Please use a different email.');
            } else {
                toast.error('Signup failed. Please try again later.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <AdSenseComponent/>
            {loading && <div className='overlay'></div>}
            <div className='bg-gray-800 px-10 py-10 rounded-xl'>
                <div className=''>
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name='name'
                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Name'
                    />
                </div>

                <div>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className='flex justify-center mb-3'>
                    <button
                        onClick={signup}
                        className='bg-red-500 w-full text-white font-bold px-2 py-2 rounded-lg'>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>
                        Have an account?{' '}
                        <Link className='text-red-500 font-bold' to={'/login'}>
                            Login
                        </Link>
                    </h2>
                </div>
            </div>
            <AdSenseComponent/>
        </div>
    );
}

export default Signup;
