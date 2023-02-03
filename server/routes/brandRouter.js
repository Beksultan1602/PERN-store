const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController.js')
const checkRole = require("../middleware/CheckRoleMiddleware");


router.post('/', checkRole('ADMIN'),brandController.create)
router.get('/', brandController.get)

module.exports = router