import hospitalModel from '../Common/hospitalModel';
import bloodAvailability from '../Common/bloodUnits';
import userModel from '../Common/userModel';
import donation from '../Common/donation';
import todayPostModel from '../Common/todayPost';

export const hospitalRegistration = (req, res) => {
    hospitalModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
export const urgentBlood = (req, res) => {
  todayPostModel.find( {"Date":req.query.Date}, (err, result)=> {
    res.send(result.map(record => {
      return record;
    }));
  })
}

export const bloodBanklogin = (req, res) =>{
    hospitalModel.findOne( {"PhoneNo":req.query.PhoneNo,"Password":req.query.Password, "status":"active"},(err,result)=> {
      res.send(result);
  
    })
  }
  export const bloodAdd = (req, res) => {
    bloodAvailability.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
export const showBlood = (req, res) => {
  bloodAvailability.find({"PhoneNo":req.query.PhoneNo},(err, users) => {
    if (!err) {
      res.send(users);
    } else {
      res.send(err);
    }
  })
}

export const deletebloodUnits = (req, res) => {
  bloodAvailability.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      bloodAvailability.find({}, (err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.send(results);
        }
      })
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
export const updatebloodUnits = (req, res) =>{
  bloodAvailability.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, updatedObj) => {
    if (err) {
        res.send(err);
    } else {
      bloodAvailability.find((err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    }
  })
  }
  export const searchBloodUnits = (req, res) =>{
    bloodAvailability.find( {"District":req.query.District,"bloodGroup":req.query.bloodGroup},(err,result)=> {
      res.send(result.map(record => {
        return record;
      }));
    })
  }

export const donerList = (req, res) => {
  userModel.find((err, users) => {
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

  export const bloodBankList = (req, res) => {
    hospitalModel.find( {"status":req.query.status}, (err, result)=> {
      res.send(result.map(record => {
        return record;
      }));
    })
  }

export const donationRegistration = (req, res) => {
  donation.create(req.body, (err, result) => {
  if (err) {
    res.send(err);
  } else {
    res.send(result);
  }
})
}

export const viewProfile = (req, res) => {
  hospitalModel.find( {"Phone":req.query.username}, (err, result)=> {
    res.send(result.map(record => {
      return record;
    }));
  })
}

export const updateProfile = (req, res) => {
  hospitalModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}