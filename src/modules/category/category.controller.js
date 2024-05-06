import categoryModel from "../../../DB/model/category.model.js";
import slugify from 'slugify';
import cloudinary from './../../utls/cloudinary.js';

export const create =async(req,res)=>{
    const name = req.body.name.toLowerCase();
    if(await categoryModel.findOne({name:req.body.name})){
        return res.status(409).json({message:"category already exists"});
    }
    const{secure_url,public_id} = await cloudinary.uploader.upload(req.file.path,{
      folder:'tshop5/categories'  
    });
    const category = await categoryModel.create({name,slug:slugify(name),image:{secure_url,public_id}});
    return res.json({message:category});
};