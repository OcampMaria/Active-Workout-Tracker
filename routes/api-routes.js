const router = require("express").Router();
const Workout = require("../models/workout-model");

router.get("/api/workouts", (req, res) => {
  Workout.find({}).then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});


router.put("/api/workout/:id", (req, res) => {
    Workout.findOneAndUpdate({
      _id:req.params.id
    },
    {
      $push:{exercises:req.body}
    },
    {new:true}).then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
  


module.exports = router;
