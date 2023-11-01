const userModel = require('../model/userModel');

module.exports = {
    punchIn: (data) => {
        return new Promise((resolve, reject) => {
            const user = new userModel({
                username: data.username,
                tasks: [{ task: data.task }],
                punchInTime: new Date()
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
    punchout: async (data) => {
        let user = data.username
        console.log("HELPER DATA.NAME",user)

        return new Promise(async (resolve, reject) => {
            await userModel.findOne({ username: user }).then((userFound) => {
                if (userFound) {
                    console.log("userFound",userFound)
                    resolve( userFound);

                } else {
                    resolve({ status: false })
                    // await userModel.updateOne({ username: user },
                    //     {
                    //         $push: {
                    //             punchOutTime: new Date,
                    //             completed: [{
                    //                 task: userFound.completed
                    //             }]

                    //         }
                    //     })
                    // resolve()
                }
            })

        })
    }
};
