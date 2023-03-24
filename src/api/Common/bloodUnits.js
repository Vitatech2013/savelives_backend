import mongoose from 'mongoose'

const bloodUnits = new mongoose.Schema({
    PhoneNo: {
        type: String
    },
    District: {
        type: String
    },
    bloodGroup: {
        type: String
    },
    units: {
        type: String
    }
},
    {
        timestamps: true
    });

const model = mongoose.model('bloodAvailability', bloodUnits)

export default model