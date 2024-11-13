import express,{Request, Response, NextFunction} from 'express'
import 'express-async-errors';
import { router } from './routes';
import cors from 'cors';
import 'dotenv/config';
import path from 'path'
import fileUpload from 'express-fileupload';


const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:8081', 'http://192.168.100.113:8081','https://webpizzaria.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}))
app.use(fileUpload({
    limits:{fileSize:50*1024*1024}
}))

app.use(router);

app.use(
    '/files',
    express.static(path.resolve(__dirname,'..','tmp'))
)

app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    if(err instanceof Error){
        //se for uma instancia do tipo error
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status:'error',
        message:'internal server error'
    })
})

// app.listen(process.env.PORT , ()=>console.log('servidor online!!!'))
export default app;