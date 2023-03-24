import mongoose from 'mongoose'

const todayPost = new mongoose.Schema({
    Name: {
        type: String
    },
    Age: {
        type: String
    },
    BloodGroup: {
        type: String
    },
    PhoneNo: {
        type: String
    },
    Address: {
        type: String
    },
    Date: {
        type: String
    },
    RequiredUUnits: {
        type: String
    }
},

    {
        timestamps: true
    });

const model = mongoose.model('todayPost', todayPost)

export default model