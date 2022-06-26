//React 2022 google authentication update

import React, { useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

function AuthPage() {  


    useEffect(() => {
        function start() {
        gapi.client.init({
            clientId:"",
            scope: 'email',
        });
        }
        gapi.load('client:auth2', start);
        }, []);

        const onSuccess = response => {
        console.log('SUCCESS', response);
        };
        const onFailure = response => {
        console.log('FAILED', response);
        };
        const onLogoutSuccess = () => {
        console.log('SUCESS LOG OUT');
        };
    
    return (
    <div>
        <GoogleLogin
            clientId={"________________"}
            onSuccess={onSuccess}
            onFailure={onFailure}
        />
        <GoogleLogout
            clientId={"________________"}
            onLogoutSuccess={onLogoutSuccess}
        />
    </div>
    );

}

export default AuthPage;