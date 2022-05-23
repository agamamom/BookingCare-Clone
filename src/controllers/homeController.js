import { json } from "express/lib/response";
import db from "../models/index";

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
module.exports = {
    getController: getController,
    getCRUD: getCRUD,
}