import mongoose from 'mongoose';

const MembershipSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    number:{
        type:Number,
        required:[true,"number is required"],
        unique:true
    },
    city:{
        type:String,
        required:[true,"city is required"]
    }
})

const Membership=mongoose.model('Membership', MembershipSchema);

export default Membership;