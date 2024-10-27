
export const envVars = () => {
    /*let REMOTE_API_URL = "http://localhost:3000/api";
    let API_COMMON_SECRET="219e3ce3be75108ae875b10b70e093be1e63052a26868b0db5d2053a3e685090ea3ddf471a056459710e378d51c761f2172a42093fd950db32b7523af5d78002";*/
    let REMOTE_API_URL = process.env.REMOTE_API_URL;
    let API_COMMON_SECRET= process.env.API_COMMON_SECRET;
    let API_ENCRYPTION_IV= btoa("CiL1lIEnrixl/JsT8ynXDw==");

    return {REMOTE_API_URL, API_COMMON_SECRET, API_ENCRYPTION_IV};
}
