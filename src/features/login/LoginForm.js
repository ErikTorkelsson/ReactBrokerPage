import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import { postLogin } from './loginSlice'
import { useHistory } from "react-router-dom";

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

        <form class="container">
            <h2 class="m-3">Logga in</h2>
            <div class="col">
                <label class="form-group col-md-8 my-2">
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
                <label class="form-group col-md-8 my-2">
                Lösenord
                <input
                    type="password"
                    value={passWord}
                    onChange={onPassWordChanged}
                    class="form-control"
                />
                </label>
            </div>
            <button class="btn btn-secondary" onClick={(event) => onPostLoginClicked(event)}>Skicka</button>
        </form>

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