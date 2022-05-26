import { json } from "express/lib/response";
import db from "../models/index";
import CRUDService from "../services/CRUDService";


let getController = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homePage.ejs', {
            data: JSON.stringify(data),
        });
    }
    catch (e) {
        console.log(e);
    }
}

let getCRUD = (req, res) => {
    return res.render('CRUD.ejs');
}
let postCRUD = async (req, res) => {
    console.log(req.body);
    await CRUDService.createNewUser(req.body);

    return res.send("post success");
}
module.exports = {
    getController: getController,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}