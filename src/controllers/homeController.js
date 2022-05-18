let getController = (req, res) => {
    return res.render('homePage.ejs');
}
module.exports = {
    getController: getController,
}