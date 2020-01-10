const express = require('express');
const ADVER = require('../models/advertisments');
const router = express.Router();

router.route('/')

.post((req, res, next) => {
	ADVER.create(req.body)
		.then(adverA => {
			res.json(adverA);
		}).catch(next);
});

router.get('/all', (req, res, next) => {
	ADVER.find()
		.then(adverB => {
			res.json(adverB);
			console.log('I was here!');
		})
		.catch(next);
});

module.exports = router;
