// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;


router.get('/login', function (req, res) {
  var compare = req.query.username

  // get the number of times the user since login has done a search
  global.run = req.query.run

  // and add one
  console.log("run:" + run )

  res.render('servicefinder-searchtype', { run:run })
})


router.get('/searchtype', function (req, res) {
  var run = req.query.run

  // and add one
  run = parseInt(run) + 1
  console.log("run:" + run )

  res.render('symptom-search', { run:run })
})


// service type select ... grabbing picks to playback later
router.get('/services', function (req, res) {
  var run = req.query.run
  console.log("run:" + run )

  var compare = req.query.selectedservices
  var selectedservices = req.query.selectedservices

  console.log(selectedservices.length)
  console.log(selectedservices)


  if (selectedservices.includes('Minor Injury Unit (MIU)')) {
    // Yes, it's there
    console.log("branch to MIU finder")
    res.render('servicefinder-selectedservices-miu', { selectedservices:selectedservices, run:run })

  } else if (selectedservices.find(a =>a.includes("Mental"))) {
    // Yes, it's there
    console.log("branch to Mental Health finder")
    res.render('servicefinder-selectedservices-mh', { selectedservices:selectedservices, run:run })
  } else {
    // Everything else just checks the selected items if more than one

    if (selectedservices.length >= 2) {
      // more than one selected so review the selected items
      res.render('servicefinder-selectedservices', { selectedservices:selectedservices, run:run })
    } else {
      // or go straight to the next step (location) if only one type is selected...
      res.render('servicefinder-location-field', { selectedservices:selectedservices, run:run })
    }
  }
  
})



router.get('/selected', function (req, res) {
  var selectedservices = req.query.selectedservices
  var run = req.query.run
  console.log("run:" + run )

  res.render('servicefinder-location-field', {  selectedservices:selectedservices, run:run })
})