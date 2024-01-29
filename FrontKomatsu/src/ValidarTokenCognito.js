// ValidarTokenCognito.js
import { poolData } from './AmazonCognitoConfig';
import {
  CognitoUserPool,
  CognitoIdToken,
} from 'amazon-cognito-identity-js';
import { signIn } from './SignIn';

function validarTokenCognito() {
  // Retrieve access_token from localStorage
  const access_token = localStorage.getItem("access_token");
  const url = window.location.href;
  const params = new URLSearchParams(url);
  const idToken = params.get("id_token");
  const accessTokenParam = params.get("access_token");

  // Rest of the code...

  if (access_token !== null) {
    const userPoolId = "us-east-1_Fe4DNTxR0";
    const userPool = new CognitoUserPool(poolData);

    const jwtToken = new CognitoIdToken({
      IdToken: access_token,
    });

    // Rest of the code...
  } else {
    signIn();
  }
}

export { validarTokenCognito };
