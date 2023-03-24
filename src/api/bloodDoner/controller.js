import userModel from '../Common/userModel';
import todayPost from '../Common/todayPost';
import hospitalModel from '../Common/hospitalModel';
import todayPostModel from '../Common/todayPost';

export const userRegistration = (req, res) => {
    userModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
export const donerLogin = (req, res) =>{
    userModel.find( {"PhoneNo":req.query.PhoneNo,"Password":req.query.Password},(err,result)=> {
      res.send("Login Success");
  
    })
  }
  export const donorList = (req, res) => {
    userModel.find((err, users) => {
      if (!err) {
        res.send(users);
      } else {
        res.send(err);
      }
    })
  }
  export const requestBlood = (req, res) => {
    todayPost.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
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

export const searchDoner = (req, res) =>{
  userModel.find( {"District":req.query.District,"BloodGroup":req.query.BloodGroup},(err,result)=> {
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

export const bloodBankList = (req, res) => {
  hospitalModel.find( {"status":req.query.status}, (err, result)=> {
    res.send(result.map(record => {
      return record;
    }));
  })
}

export const viewProfile = (req, res) => {
  userModel.find( {"Phone":req.query.username}, (err, result)=> {
    res.send(result.map(record => {
      return record;
    }));
  })
}

export const updateProfile = (req, res) => {
  userModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}