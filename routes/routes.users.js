const {Router} = require('express');
const {getUsers, 
       getUserById,
       createUser,
       updateUserComplete,
       deleteUser,
       updateUser } = require('../controllers/controllers.users');
const router = Router();

router.get('/', getUsers);
router.get('/', getUserById);
router.post('/', createUser);
router.put('/:id', updateUserComplete);
router.delete('/', deleteUser);
router.patch('/', updateUser);

module.exports = router;