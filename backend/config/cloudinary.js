import {v2 as cloudinary} from 'cloudinary'

const connectCloudinary = async ()=>{

    cloudinary.config({
        cloud_name:process.env.CLUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_SECRET_KEY
    },
console.log("cloudinary connected"))
}

export default connectCloudinary