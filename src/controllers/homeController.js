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
let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render('displayCRUD.ejs', {
        dataTable: data,
    });
}
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        return res.render("editCRUD.ejs", {
            user: userData,
        });
    }
    else {
        return res.send("Users not found!")
    }
}
let putCRUD = async (req, res) => {
    let data = req.body;
    let allUser = await CRUDService.updateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUser,
    });
}
let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUserById(id);
        return res.send("Delete Success!!");
    }
    else {
        return res.send("User not found!");
    }

}
module.exports = {
    getController: getController,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}