// calling all dependencies
import Express  from "express"
import cors from "cors"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import connectDB from './SRC/DB/database.js'
import router from "./SRC/routes/index.js"

//initializing the dot env method
dotenv.config()

//assigning the express method to a variable
const app = Express()



//using the express functions
app.use(cors({origin: "*"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/recipe', router)



const startserver = async () => {
    const PORT = process.env.PORT || 2233 
    try {
        app.listen(PORT, () => {console.log(`APP IS RUNNING ON PORT : ${PORT}`);})
        connectDB()
    } catch (error) {
        console.log(error);
    }
};

startserver();

app.get("/",(req,res) => {
    res.send(`API IS RUNNING`)
})