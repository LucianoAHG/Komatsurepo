// Importa las bibliotecas de Amazon Cognito
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
  CognitoUserSession,
} from 'amazon-cognito-identity-js';

// Define poolData al principio del archivo
const poolData = {
  UserPoolId: "us-east-1_Fe4DNTxR0",
  ClientId: "4qgriojtu7dljej7uodkn62536",
};

// Resto de tu código...

var userPool = new CognitoUserPool(poolData);

function signIn(username, password) {
  var authenticationData = {
    Username: username,
    Password: password,
  };

  var authenticationDetails = new AuthenticationDetails(authenticationData);

  var userData = {
    Username: username,
    Pool: userPool,
  };

  var cognitoUser = new CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (session) {
      console.log("Autenticación exitosa", session);
      // Realiza acciones después de iniciar sesión
    },
    onFailure: function (err) {
      console.error("Error en la autenticación", err);
      // Realiza acciones en caso de error
    },
    newPasswordRequired: function (userAttributes, requiredAttributes) {
      // Cambiar contraseña si es necesario
      // Detalles adicionales pueden manejarse aquí
    },
  });
}

function validarTokenCognito() {
  // Accede a poolData aquí para que sea reconocido por ESLint
  const poolData = {
    UserPoolId: "us-east-1_Fe4DNTxR0",
    ClientId: "4qgriojtu7dljej7uodkn62536",
  };

  // ... (código existente)

  let access_token = localStorage.getItem('access_token');

  if (access_token !== null) {
    const jwtToken = new CognitoUserSession({
      IdToken: access_token,
    });

    const tokenPayload = jwtToken.getIdToken().payload;

    if (tokenPayload.exp * 1000 < new Date().getTime()) {
      // Cerrar sesión si el token ha expirado
      // Puedes redirigir al usuario a la página de inicio de sesión aquí
      console.log("El token ha expirado. Cerrando sesión...");
    } else {
      // Iniciar sesión
      console.log("Usuario autenticado:", tokenPayload);
    }
  } else {
    // Redirigir al inicio de sesión si no hay token
    signIn("username", "password"); // Proporciona las credenciales del usuario
  }
}
