const db = require("../models");

// Routes
module.exports = (app) => {

  // GET route for getting all of the workouts
  app.get("/api/workouts", (req, res) => {
    const query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    db.Workout.find({},(err, data) => {
        if (err) {
          console.log(err);
        } else {
            console.log(data);
          res.json(data);
        }
      });
  });

};
