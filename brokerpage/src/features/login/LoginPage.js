import React from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => {

    let token = window.localStorage.getItem('token')

    const onLogoutClicked = () => {
        window.localStorage.setItem('token', "");
    }

    if(token){
        return(
            <form>
                <h2>Du är redan inloggad</h2>
                <button class="btn btn-secondary m-2" onClick={() => onLogoutClicked()}>Logga ut</button>
            </form>
        )
    }
    else{
        return(
            <LoginForm></LoginForm>
        )
        
    }

}

export default LoginPage;