module.exports = {

    databaseURL: process.env.DATABASE_URL || "postgres://postgres:postgres@127.0.0.1:32/tutorial"
    //,

    // Nibs users are created as Contacts under a generic Account in SFDC. This is the id of the generic account.
    //contactsAccountId: process.env.CONTACTS_ACCOUNT_ID,

    // Used by nforce to create Cases in real time
    //api: {
        // Connected app
    //    clientId: process.env.OAUTH_CLIENT_ID,
    //    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    //    redirectUri: process.env.OAUTH_REDIRECT_URL,
    //    apiVersion: 'v29.0',

        // SFDC user used to make API calls from Node server
    //    userName: process.env.INTEGRATION_USER_NAME,
    //    password: process.env.INTEGRATION_USER_PASSWORD
    //},

    // Used for picture upload (user profile and gallery)
    //s3: {
    //    bucket: process.env.S3_BUCKET_NAME || process.env.PLANTER_BUCKET_NAME,
    //    awsKey: process.env.AWS_KEY || process.env.PLANTER_S3_ACCESS_KEY_ID,
    //    secret: process.env.AWS_SECRET || process.env.PLANTER_S3_SECRET_ACCESS_KEY
    //}

};