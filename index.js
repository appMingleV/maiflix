import express from 'express';
import routes from './routes/index.js';
import connectDB from './config/db.js'
import cors from 'cors';
const app = express();
connectDB();
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    return res.status(200).json({
        status: "success",
        message: "Welcome to Maiflix"
    })
})
app.use('/api',routes)

app.listen(7000,(err)=>{
    if(err) throw err;
    console.log('Server is running on port 7000');

})