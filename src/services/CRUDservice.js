import db from '../models/index';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

const createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
            });
            resolve('successfully creates user');
        } catch (e) {
            reject(e);
        }
    });
};

const hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            //hash password
            const hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    });
};

const getCRUD = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await db.User.findAll({ raw: true });
            resolve(data);
        } catch (e) {
            reject(e);
        }
    });
};

const getUserById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const dataUser = await db.User.findAll({ where: { id: id }, raw: true });
            resolve(dataUser);
        } catch (e) {
            reject(e);
        }
    });
};

const updateCRUD = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hashPassword = await hashUserPassword(data.password);
            await db.User.update(
                {
                    email: data.email,
                    password: hashPassword,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    phoneNumber: data.phoneNumber,
                    gender: data.gender === '1' ? true : false,
                    roleId: data.roleId,
                },
                { id: data.id },
            );
            resolve('successfully');
        } catch (e) {
            reject(e);
        }
    });
};
module.exports = {
    createNewUser,
    getCRUD,
    getUserById,
    updateCRUD,
};
