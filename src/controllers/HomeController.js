import db from '../models/index';
import CRUDservice from '../services/CRUDservice';
const getHomePage = async (req, res) => {
    try {
        const data = await db.User.findAll();
        res.render('homePage.ejs', {
            data: JSON.stringify(data),
        });
    } catch (error) {
        console.log(error);
    }
};

const getCRUD = (req, res) => {
    res.render('crudPage.ejs');
};

//[PORT] /post-crud
const postCRUD = async (req, res) => {
    const message = await CRUDservice.createNewUser(req.body);
    console.log(message);
    res.send('Success');
};

//[GET] /get-crud
const displayGetCRUD = (req,res) =>{
    res.send("DISPLAY GET CRUD")
}

module.exports = {
    getHomePage,
    getCRUD,
    postCRUD,
    displayGetCRUD,
};
