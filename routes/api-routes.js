const db = require("../models");

// Routes
module.exports = (app) => {

  // GET route for getting all of the workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  });

  // POST route for getting adding new workout
  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
  });

  // PUT route for updating exisitng workout
  app.put("/api/workouts/:id", (req, res) => {
    if (!validateData(req)) {
      db.Workout.updateOne({ _id: req.params.id }, { $push: { exercises: req.body } }, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.json(data);
        }
      });
    }else{
      db.Workout.find({_id: req.params.id }, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.json(data);
        }
      });
    }

  });

  //Do not added data if empty form is submitted.
  function validateData(req) {
    if ((req.body.name === "" && req.body.distance === 0 && req.body.duration === 0) || (req.body.name === "" && req.body.weight === 0 && req.body.duration === 0 && req.body.reps === 0 && req.body.sets === 0)) {
      return true;
    }
    return false;
  }

  // GET route for getting workout range, 
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });

  });
};
