/*======================
      DEPENDENCIES 
========================*/
const express = require("express");
const router = express.Router();
const Rental = require("../models/rentalSchema.js");

/*======================
      Routes
========================*/

//          GET            //
router.get("/", (req, res) => {
  Rental.find({}, (error, foundrentals) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(foundrentals);
  });
});

//          DELETE           //
router.delete("/:id", (req, res) => {
  Rental.findByIdAndRemove(req.params.id, (error, deletedRental) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(deletedRental);
  });
});

//             UPDATE          //
router.put("/:id", (req, res) => {
  Rental.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedRental) => {
      if (error) {
        res.status(400).json({ error: error.message });
      }
      res.status(200).json(updatedRental);
    }
  );
});

//          CREATE       //
router.post("/", (req, res) => {
  Rental.create(req.body, (error, createdRental) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).send(createdRental);
  });
});

/*======================
       EXPORTS 
========================*/
module.exports = router;
