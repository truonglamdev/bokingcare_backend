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
const displayGetCRUD = async (req, res) => {
    const data = await CRUDservice.getCRUD();
    res.render('displayGetCRUD.ejs', {
        data,
    });
};

const getEditCRUD = async (req, res) => {
    const id = req.query.id;
    const data = await CRUDservice.getUserById(id);
    res.render('editCRUD.ejs', {
        data,
    });
};

const updateCRUD = async (req, res) => {
    const data = req.body;
    await CRUDservice.updateCRUD(data);
    res.send('Update successfully');
};

module.exports = {
    getHomePage,
    getCRUD,
    postCRUD,
    displayGetCRUD,
    getEditCRUD,
    updateCRUD,
};
