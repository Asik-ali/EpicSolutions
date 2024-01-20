import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../Firebase/Firebase';
import MediaQuery from 'react-responsive';

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
        <div className='flex flex-col md:flex-row justify-center items-center h-screen'>
            {loading && <div className='overlay'></div>}
            <div className='bg-gray-800 px-6 py-6 md:px-10 md:py-10 rounded-xl max-w-md w-full md:w-96'>
                <div className='mb-4'>
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                    <ins
          className="adsbygoogle"
          style={{ display: 'block', textAlign: 'center' }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-2334117942638644"
          data-ad-slot="9110706246"
        ></ins>
                </div>
                <div className='mb-4'>
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name='name'
                        className='input-field'
                        placeholder='Name'
                    />
                </div>

                <div className='mb-4'>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        className='input-field'
                        placeholder='Email'
                    />
                </div>
                <div className='mb-4'>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='input-field'
                        placeholder='Password'
                    />
                </div>
                <div className='flex justify-center mb-3  bg-red-500'>
                    <button onClick={signup} className='btn-signup'>
                        Signup
                    </button>
                </div>
                <div>
                    <h2 className='text-white text-center'>
                        Have an account?{' '}
                        <Link className='text-red-500 font-bold' to={'/login'}>
                            Login
                        </Link>
                    </h2>
                </div>
            </div>
           
        </div>
    );
}

export default Signup;
