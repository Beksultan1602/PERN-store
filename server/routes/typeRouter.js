const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController.js')
const checkRole = require('../middleware/CheckRoleMiddleware.js')

router.post('/', checkRole('ADMIN'),typeController.create)
router.get('/', typeController.get)

module.exports = router