
const { punchIn, punchout } = require('../helper/userHelper')
module.exports = {
    indexedDB: (req, res) => {
        res.render('index');

    },
    punchinDb: (req, res) => {

        let formData = req.body
        console.log("formdata", formData)


        punchIn(formData).then((data) => {


        })


    },
    punchoutDb: (req, res) => {
        let formData = req.body
        console.log("formdata", formData)

        punchout(formData).then((data) => {
            console.log(data)
            let username = data.username
            let tasks = data.tasks
            res.render('punchout',{username, tasks})
        })




    },
    userInfo: (req, res) => {

    }

}
