// SignIn.js
import { poolData } from './AmazonCognitoConfig';
import {
  CognitoUserPool,
  CognitoUser,
} from 'amazon-cognito-identity-js';
import './AmazonCognitoConfig'
function signIn() {
  const userPool = new CognitoUserPool(poolData);
  const userData = {
    Username: "",
    Pool: userPool,
  };
  const cognitoUser = new CognitoUser(userData);
  cognitoUser.getSession(function (err, session) {
    if (err) {
      console.error(err);
      window.location.href = `https://loginech.auth.us-east-1.amazoncognito.com/login?client_id=${poolData.ClientId}&response_type=token&scope=openid&redirect_uri=https:http://192.168.1.83:3000/`;
      return;
    }
  });
}

export { signIn };
