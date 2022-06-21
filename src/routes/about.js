const express = require('express');
const router = express.Router();


router.get(
    '/',
    async (req, res) => {
        try {
            res.render('../../client/src/components/About.js');
        } catch (error) {
            console.log(error);
            res.status(500).send({ result: 'Internal server error', isSuccessfull: false });
        }
    }
);

module.exports = router;