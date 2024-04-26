import connectDB from '../DB/connection.js';
import categoryRouter from './modules/category/category.router.js';
import productRouter from './modules/product/product.router.js';

const initApp = (app,express)=>{
    connectDB();
app.use(express.json());
app.get('/',(req,res)=>{
    return res.status(200).json({message:"success"});
});
app.use('/categories',categoryRouter);
app.use('/products',productRouter);

app.use('*',(req,res)=>{
    return res.status(204).json({message:"page not found"});
});
}


export default initApp;