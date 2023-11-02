
const { response } = require('express');
const { punchIn, punchOut, punchoutPage } = require('../helper/userHelper')
module.exports = {
    indexedDB: (req, res) => {
        res.render('index');

    },
    punchinDb: (req, res) => {

        let formData = req.body
        console.log("formdata", formData)

 
        punchIn(formData).then((data) => {
            res.json({ response })


        })


    },
    punchoutDb: (req, res) => {
        let formData = req.body.username

        punchoutPage(formData).then((data) => {
            let UserStatus = data.status
            console.log("UserStatus", UserStatus);
            if (UserStatus == false) {

                console.log("usernotFound status", UserStatus);
                res.render('punchout', { UserStatus })

            } else {

                let username = data.user.username
                let tasks = data.user.tasks
                console.log("Tasks for page array", tasks, UserStatus)
                res.render('punchout', { username, tasks, UserStatus })
            }

        })

    },
    userInfo: (req, res) => {

        let PunchOutForm = req.body
        console.log("Detail to userInfo",PunchOutForm)
        punchOut(PunchOutForm).then((response) => {
            res.json({response})

        })


    }

}
