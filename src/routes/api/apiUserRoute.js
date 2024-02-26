const express = require('express');
const router = express.Router();

const apiUser = require('../../controllers/api/apiUserController');

router.get("/", apiUser.list);
router.get("/:id", apiUser.detail);

module.exports = router;