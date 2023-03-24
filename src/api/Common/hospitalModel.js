import mongoose from 'mongoose'

const hospitalRegistration = new mongoose.Schema({
    Type: {
        type: String
    },
    OrganisationName: {
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
    District: {
        type: String
    },
    Area: {
        type: String
    },
    Address: {
        type: String
    },
    status: {
        type: String
    },
},

    {
        timestamps: true
    });

const model = mongoose.model('Registration', hospitalRegistration)

export default model