const { response } = require('express');
const userModel = require('../model/userModel');

module.exports = {
    punchIn: (data) => {
        return new Promise((resolve, reject) => {
            const user = new userModel({
                username: data.username,
                tasks: [{ task: data.task }],
                punchInTime: new Date(),
                checked: true
            });

            user.save()
                .then(() => {
                    resolve();
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },


    punchOut: async (data) => {

        let username = data.username;
        console.log('Username:', username);
        let formData = data.formData;
        let tasks = formData.split('&').map(item => item.split('=')[1]);

        return new Promise(async (resolve, reject) => {
            console.log('Username:', username);
            console.log('Tasks:', tasks);

            // First, check if the user is found with checked: true
            var foundUser = await userModel.findOne({ username: username, checked: true });
            console.log("founUser", foundUser)

            if (foundUser) {
                console.log("Found user with status true");

                // Punchout time setting
                await userModel.updateOne({ username: username },
                    {
                        $push: {
                            punchOutTime: new Date(),
                            completed: tasks.map(task => task.tasks)
                        },
                        $set: { checked: false }
                    }
                );
                console.log("changed")

                resolve(response);
            } else {
                console.log("User not found to punchout")
                resolve()
            }
        });





    },

    punchoutPage: async (data) => {
        let user = data
        console.log("HELPER DATA.NAME", user)

        return new Promise(async (resolve, reject) => {
            await userModel.findOne({ username: user }).then((userFound) => {
                if (userFound) {
                    console.log("userFound", userFound)
                    resolve({ user: userFound, status: true });

                } else {
                    resolve({ status: false })//Code for the user not found situation




                }
            })

        })
    }
};
