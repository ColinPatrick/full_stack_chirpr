import * as express from 'express';
import db from '../db';

const router = express.Router();

router.get('/:id?', async (req, res) => {

    const chirpid = Number(req.params.id);

    if (chirpid) {
        try {
            res.json(await db.Chirps.one(chirpid));
        } catch(e) {
            console.log(e);
            res.sendStatus(500);
        }        
    } else {
        try {
            res.json(await db.Chirps.all());
        } catch(e) {
            console.log(e);
            res.sendStatus(500);
        } 
    }
});

router.post('/', async (req, res) => {
    try {
        let user = await db.Chirps.getUser(req.body.name);
        let userid = 0;

        if (user.length < 1) {
            
            let userRes = await db.Chirps.insertUser(req.body.name);

            if (userRes !== null) {
                let tempRes = <any>userRes;
                userid = tempRes.insertId;
            } else {
                console.log('Insert of user failed.');
                res.sendStatus(500);
            };
        } else {
            userid = user[0].id;          
        }
        res.json(await db.Chirps.insert({userid: userid, content: req.body.content}));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});


router.put('/:id', async (req, res) => {

    const chirpid = Number(req.params.id);

    try {
        res.json(await db.Chirps.update({id: chirpid, newChirp: req.body.content}))
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/:id', async (req, res) => {

    const chirpid = Number(req.params.id);

    try {
        res.json(await db.Chirps.deleteChirp(chirpid));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;