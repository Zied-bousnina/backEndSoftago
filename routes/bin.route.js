const express = require('express');
const passport = require('passport');
const { ROLES, isRole } = require('../security/Rolemiddleware');
const { addBinToScepcifiqueCompany, CreateAccess } = require('../controllers/Access.controller');
const { CreateBin, getAllBins, getBinsCount } = require('../controllers/Bin.controller');
const { CreateBin2, fetchAllBins } = require('../controllers/Bin2.controller');


const router = express.Router()


router.route('/').post( CreateBin )
router.route('/createBin').post( CreateBin2 )
router.route('/getAllBins').get( getAllBins )
router.route('/FetchAllBins').get( fetchAllBins )
router.route('/getBinsCount').get( getBinsCount )











module.exports = router