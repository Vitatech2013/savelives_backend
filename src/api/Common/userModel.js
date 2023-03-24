import mongoose from 'mongoose'

const userRegistration = new mongoose.Schema({
    Name: {
        type: String
    },
    FatherName: {
        type: String
    },
    PhoneNo: {
        type: String
    },
    Email: {
        type: String
    },
    Password: {
        type: String
    },
    Gender: {
        type: String
    },
    Age: {
        type: String
    },
    BloodGroup: {
        type: String
    },
    LastDonation: {
        type: String
    },
    
    District: {
        type: String
    },
    Area: {
        type: String
    },
    Address: {
        type: String
    }
},

    {
        timestamps: true
    });

const model = mongoose.model('userRegistration', userRegistration)

export default model