import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import { postLogin } from './loginSlice'
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login"
import { googleLogin } from './loginSlice'

const LoginForm = () => {

    const history = useHistory()

    const dispatch = useDispatch();

    const [email,setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    // const [response, setResponse] = useState([]);

    // const token = response.token;

    // console.log(token);

    const onEmailChanged = (e) => setEmail(e.target.value);
    const onPassWordChanged = (e) => setPassWord(e.target.value);

    const responseGoogle = (response) => {
        console.log("google-respons", response)
        dispatch(googleLogin({"tokenId":response.tokenId}));
    }

    const onPostLoginClicked = (event) => {

        event.preventDefault()

        // dispatch(postLogin({"email": email,"password": passWord}));

        const requestBody = {
            "email": email,
            "password": passWord
        };

        fetch('https://localhost:44382/api/auth/brokerpass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        }).then(res => res.json().then(data => {
            // setResponse(data);
            window.localStorage.setItem('token', data.token);
        }));
        
        history.push('/')

    }


    return(
    <div class="container">   
        <form>
            <h2 class="mt-3">Logga in</h2>
            <div>
                <label class="form-group">
                Email
                <input
                    type="email"
                    value={email}
                    onChange={onEmailChanged}
                    class="form-control"
                />
                </label>
            </div>
            <div class="text">
                <label class="form-group">
                Lösenord
                <input
                    type="password"
                    value={passWord}
                    onChange={onPassWordChanged}
                    class="form-control"
                />
                </label>
            </div>
            <button class="btn btn-secondary m-2" onClick={(event) => onPostLoginClicked(event)}>Skicka</button>
        </form>
        <div class="mt-3">
            <React.Fragment>
              <GoogleLogin //Google-komponenten.
                clientId="880466237394-aethf4onogo5ovh789ngqpogq0a0v6sr.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}>
                  <span>log in with google</span>
                </GoogleLogin>
            </React.Fragment>
        </div>
    </div> 


    )

    // const onResponse = (response) => {
    //     console.log(response)
    // }
    // return(
    //     <div>
    //         <GoogleLogin
    //             clientId = {"880466237394-aethf4onogo5ovh789ngqpogq0a0v6sr.apps.googleusercontent.com"}
    //             onSuccess={onResponse}
    //             onFailure={responseGoogle}
    //             cookiePolicy={'single_host_origin'}>
    //             <span>log in with google</span>

    //         </GoogleLogin>
    //     </div>
    // )
} 


export default LoginForm