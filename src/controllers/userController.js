let handleLogin = (req, res) => {
    return res.status(200).json({
        message: "Hello world"
    })
}

module.exports = {
    handleLogin: handleLogin,
}