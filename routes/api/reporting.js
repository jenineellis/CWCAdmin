const router = require('express').Router();
const reportingController = require('../../controllers/reportingController')

router.route("/getProducer")
    .get(reportingController.getProducer)

module.exports = router;