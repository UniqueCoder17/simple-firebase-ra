import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                console.log('ERROR', error);
                setUser(null);
            })
    }

   const handleSignOut = () =>{
    signOut(auth)
    .then(()=>{
        console.log('Sign Out done');
        setUser(null);
    })
    .catch(error => console.log(error))
   }

   const handleGithubSignIn = () =>{
    signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                console.log('ERROR', error);
                setUser(null);
            })
   }

    return (
        <div>
            {/* <button onClick={handleGoogleSignIn}>Login with Google</button>
            <button onClick={handleSignOut}>Sign Out</button> */}

            {
                user ?
                <button onClick={handleSignOut}>Sign Out</button>
                :
                <>
                <button onClick={handleGoogleSignIn}>Login with Google</button>
                <button onClick={handleGithubSignIn}>Login with GitHub</button>
                </>
            }

            {
                user &&
                <div>
                    <h4>{user.displayName}</h4>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;