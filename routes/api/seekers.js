const router = require('express').Router();
const seekerController = require('./../../controllers/seekerController');
const authController = require('./../../controllers/authController');

router.post('/', authController.signup);
router.get('/:id', authController.protect, seekerController.getSeeker);

module.exports = router;
