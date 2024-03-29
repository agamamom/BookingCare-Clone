import userService from '../services/userService';


let handleLogin = async (req, res) => {
    let password = req.body.password;
    let email = req.body.email;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing parameter!!',
        })
    }

    let userData = await userService.handleUserLogin(email, password);

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        userData,
    })
}

module.exports = {
    handleLogin: handleLogin,
}