const bcrypt = require('bcryptjs')

module.exports = {

    login: async (req, res) => {
        let { email, password } = req.body
        const db = req.app.get('db');

        let user = await db.find_user(email) //using email to look if user exists in our database.
        // user is a container thats holding information retruned by find_user(email)
        if (user[0]) {

            let result = bcrypt.compareSync(password, user[0].password) //compareSync is comparing the password it received from req.body to what we have stored for the user in our database. bcrypt.compareSync returns true or false.
            if (result) {
                //parking garage is session store..parking spot is a session..browser is the car.. cookie is the parking pass.
                req.session.user = {
                    email: user[0].email,
                    id: user[0].id
                }

                res.status(200).send({ loggedIn: true, message: 'Login Successful' })
            } else {
                res.send({ message: 'Login incorrect' })
            }

        }
        else {
            res.send({ message: 'Email Not Found' })
        }
    },

    studentsList: (req, res) => {
        const db = req.app.get('db')
        db.get_students_list()
            .then(students => {
                console.log('**', students)
                res.status(200).send(students)
            })
    },

    rating: async (req, res) => {
        // console.log('***YOU THERE?***', req.body)
        let { student_id, dedication, attendance, independent, organization, initiative, respectful, comments, have_again } = req.body
        // console.log('**WHERE**', student_id)
        const db = req.app.get('db')

        let rate = await db.create_ratings([req.session.user.id, student_id, dedication, attendance, independent, organization, initiative, respectful, comments, have_again])

        res.status(200).send(rate)
    },


    average: async (req, res) => {
        // let{dedication, attendance, independent, organization, initiative, respectful, have_again}= req.body
        const db = req.app.get('db')
        let stdRatings = await db.get_student_ratings()
            .then(res => {
                // console.log(res)
                res.status(200).send(stdRatings)
            })
    },

    getDetail: async (req, res) => {
        // let{student_id}= req.body
        const { id } = req.params
        const db = req.app.get('db')
        // console.log('**SHOWPARAM**', req.params)
        let detail = await db.get_user_comments([id])
        // console.log('***DETAIL***',detail)
        res.status(200).send(detail)
    },

    deleteCmnt: async (req, res)=> {
        //REQ.PARAMS.commId should be ratings id.
        const {id}= req.params
        const { commId } = req.params
        const db= req.app.get('db')
        // console.log(req.params)
        let remove= await db.delete_comment([commId, id])
        res.status(200).send(remove)
    },

    updateCmnt: async(req, res)=> {
        // console.log(req.body)
        let {comments}= req.body
        const {id}= req.params
        const db= req.app.get('db')
        let updated= await db.update_comment([comments, id, req.session.user.id, id])
        res.status(200).send(updated)
    }
}

//this.