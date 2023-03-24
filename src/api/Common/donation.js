import mongoose from 'mongoose'

const bloodDonation = new mongoose.Schema({
    Bid: {
        type: String
    },
    donerName: {
        type: String
    },
    Phone: {
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

const model = mongoose.model('bloodDonation', bloodDonation)

export default model