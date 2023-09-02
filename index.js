const cookieParser = require('cookie-parser')
const express = require ('express')


require('dotenv').config()
const app = express()

//regular middleware 
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//cookie middleware
app.use(cookieParser())


const userRouter = require('./routes/userroutes')
const postRouter = require('./routes/postsroute')
// const updateRouter = require('./routes/postsroute')
// const deleteRouter = require('./routes/postsroute')


app.use('/api', userRouter)
app.use('/api', postRouter)
// app.use('/api', updateRouter)
// app.use('/api',deleteRouter)
// app.use('/api')

app.get('/', (req, res) => {
    res.send("helloooohii")
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
})