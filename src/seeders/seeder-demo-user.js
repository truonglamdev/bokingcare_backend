'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                email: 'truonglamdev070303@gmail.com',
                firstName: 'Lam',
                password: '123456',
                lastName: 'Truong',
                address: 'VN',
                phoneNumber:'0123456789',
                gender: 1,
                roleId: 'R1',
                positionId: 'doctor',
                image: 'https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
