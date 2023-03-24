
import Loginmodel from './Loginmodel';
import hospitalModel from '../Common/hospitalModel';
import userModel from '../Common/userModel';
import todayPostModel from '../Common/todayPost';

export const login = (req, res) =>{
    Loginmodel.find( {"name":req.query.name,"password":req.query.password},(err,result)=> {
      res.send("Login Success");
  
    })
  }
  export const hospitalAprovelist = (req, res) => {
    hospitalModel.find( {"status":req.query.status}, (err, result)=> {
      res.send(result.map(record => {
        return record;
      }));
    })
  }
  export const urgentBlood = (req, res) => {
    todayPostModel.find( {"Date":req.query.Date}, (err, result)=> {
      res.send(result.map(record => {
        return record;
      }));
    })
  }
  export const hospitalUnAprovelist = (req, res) => {
    hospitalModel.find( {"status":req.query.status}, (err, result)=> {
      res.send(result.map(record => {
        return record;
      }));
    })
  }
  export const updateAprove = (req, res) => {
    hospitalModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedObj) => {
      if (err) {
        res.send(err);
      } else {
        res.send(updatedObj);
      }
    })
  }
  
  export const getUsers = (req, res) => {
    userModel.find((err, users) => {
      if (!err) {
        res.send(users);
      } else {
        res.send(err);
      }
    })
  }

  export const showBloodReg = (req, res) => {
    todayPostModel.find((err, users) => {
      if (!err) {
        res.send(users);
      } else {
        res.send(err);
      }
    })
  }

  export const emergency = (req, res) => {
    todayPostModel.find({"Date":req.query.date}, (err, users) => {
      if (!err) {
        res.send(users);
      } else {
        res.send(err);
      }
    })
  }