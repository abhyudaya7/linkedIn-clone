import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const [name,setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();
    const register = () => {
        if (!name) {
            return alert("Please enter your full name");
        }
        auth.createUserWithEmailAndPassword(email,passwd)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            }).then(() => {
                dispatch(
                   login({
                       email: userAuth.user.email,
                       uid: userAuth.user.uid,
                       displayName: name,
                       photoUrl: profilePic,
                   }) 
                )
            }
            )
        }).catch(error => alert(error));
    };
    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,passwd).then(
            userAuth => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        profileUrl: userAuth.user.photoURL,
                    })
                )
            }
        ).catch(error => alert(error));
        
    };
    return (
        <div className='login' >
            <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" alt="" />
            <form>
                <input value= {name} onChange={e => setName(e.target.value)} placeholder="Name (Required)" type="text" />
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)}  placeholder="Profile pic URL (optional)" type="text" />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" />
                <input value={passwd} onChange={e => setPasswd(e.target.value)} placeholder="Password" type="password" />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?{" "}
                <span className="login_register" onClick={register}>Register now</span>
            </p>
        </div>
    );
}

export default Login;