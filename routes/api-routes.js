const db = require("../models");

// Routes
module.exports = (app) => {

  // GET route for getting all of the workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({},(err, data) => {
        if (err) {
          console.log(err);
        } else {
          /* console.log("-----+++++++++++++++--------")
          console.log(data)
          console.log("-----+++++++++++++++--------") */
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
 
  db.Workout.updateOne({ _id: req.params.id }, { $set: { day: new Date(),exercises: req.body } }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});
/* // POST route for exercise, 
app.post("/exercise", (req, res) => {
  db.Workout.create(req.body, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});
// PUT route for exercise, id in query param
app.put("/exercise", (req, res) => {
  console.log("/exercise")
}); */

// GET route for getting workout range, 
app.get("/api/workouts/range", (req, res) => {
  db.Workout.find({},(err, data) => {
    if (err) {
      console.log(err);
    } else {
      /* console.log("-----+++++++++++++++--------")
      console.log(data)
      console.log("-----+++++++++++++++--------") */
      res.json(data);
    }
  });
 
});
};
