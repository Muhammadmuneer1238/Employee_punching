
const { punchIn, punchOut, punchoutPage } = require('../helper/userHelper')
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

        punchoutPage(formData).then((data) => {
            
            let UserStatus = data.status
            console.log("UserStatus",UserStatus);
            if (UserStatus==false) {

                console.log("usernotFound status", UserStatus);
                res.render('punchout', { UserStatus })

            } else {
                
                let username = data.user.username
                let tasks = data.user.tasks
                console.log("Tasks for page array", tasks,UserStatus)
                // Tasks for page array [
                //     {
                //       task: [ 'Eating', 'Drinking' ],
                //       _id: new ObjectId('6543278f8f458e69f128e94b')
                //     }
                //   ]
                res.render('punchout', { username, tasks, UserStatus })
            }

        })




    },
    userInfo: (req, res) => {
        let data = req.body
        console.log("Data after out", data)

    }

}
