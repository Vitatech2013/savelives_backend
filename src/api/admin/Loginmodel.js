import mongoose from 'mongoose'

const schemaAdminLogin = new mongoose.Schema({
	name:{
		type: String
	},
	password:{
        type: String
    }
    }, 
    {
		timestamps: true
	});

const Loginmodel = mongoose.model('adminLogin', schemaAdminLogin)

export default Loginmodel