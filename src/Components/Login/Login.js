import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../Firebase/Firebase';
import { Helmet } from 'react-helmet';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = async () => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      if (!result.user.emailVerified) {
        toast.error('Email not verified. Please verify your email.');
        setLoading(false);
        return;
      }

      const userData = {
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
      };
      localStorage.setItem('user', JSON.stringify(userData));

      setLoading(false);
      navigate('/');
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error('Login failed. Please check your credentials.');
    }
  };

  const forgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent. Check your inbox.');
    } catch (error) {
      console.error(error);
      toast.error(`Error sending password reset email. ${error.message}`);
    }
  };

  useEffect(() => {
    // Initialize AdSense script
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    // Do not push ads immediately, wait for the component to mount
    return () => {
      script.remove(); // Cleanup the script tag when the component is unmounted
    };
  }, []);

  useEffect(() => {
    // Push ads when the component has mounted
    const adsInsElements = document.querySelectorAll('.adsbygoogle');
    adsInsElements.forEach((element) => {
      if (element.childNodes.length === 0) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    });
  }, []);

  return (
    <div className='flex flex-col justify-center items-center h-screen lg:mt-48 mt-24'>
      <Helmet>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2334117942638644" crossOrigin="anonymous"></script>
      </Helmet>
      {loading && <div className='loading-spinner'></div>}
      <div className='max-w-md w-full p-6 bg-white rounded-md shadow-md'>
        <h1 className='text-2xl font-semibold mb-4 text-center'>Login</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          placeholder='Email'
          className='w-full p-2 mb-4 border rounded-md'
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          className='w-full p-2 mb-4 border rounded-md'
        />

        {/* First Ad */}
        <ins
          className="adsbygoogle"
          style={{ display: 'block', textAlign: 'center' }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-2334117942638644"
          data-ad-slot="7272910777"
        ></ins>

        <button
          onClick={login}
          className='w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'>
          Login
        </button>
        <div className='mt-2 text-center'>
          <Link to={'/signup'} className='text-blue-500 hover:underline'>Signup</Link>
        </div>
        <div className='mt-2 text-center'>
          <button onClick={forgotPassword} className='text-blue-500 hover:underline'>
            Forgot Password
          </button>
        </div>

        {/* Second Ad */}
        <ins
          className="adsbygoogle"
          style={{ display: 'block', textAlign: 'center' }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-2334117942638644"
          data-ad-slot="8557060525"
        ></ins>
      </div>
    </div>
  );
}

export default Login;
