import Membership from "../models/memberShip.js";
import sendMail from '../service/mail.js'
export const memberShipController=async(req,res)=>
    {
        try{
            const userData={...req.body};
            const existUser= await Membership.find({number:userData.number})
            console.log(existUser)
            if(existUser.length!=0){
                return res.status(400).json({
                    status: "failed",
                    message: "User already exists"
                })
 
            }
            const user=await Membership.create(userData)

            sendMail(userData.name,userData.number,userData.city);
             return res.status(200).json({
                status: "success",
                message: "User created successfully",
                data: user
             })

        }catch(err){
            return res.status(500).json({
                status: "failed",
                message: err.message,
            
            })
        }

    }