import { CognitoUserPool } from 'amazon-CognitoUserPool.identity-js';

const poolData = {
    UserPoolId: 'us-east-1_Fe4DNTxR0',
    ClientId: '4qgriojtu7dljej7uodkn62536'
};

export default new CognitoUserPool(poolData);