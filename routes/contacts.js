const router = require('express').Router();
let Contact = require('../models/contact.model');

router.route('/').get((req, res)=>{
    Contact.find()
        .then(contacts => res.json(contacts))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/add').post((req,res)=>{
    
    const name = req.body.name;
    const email = req.body.email;
    const title = req.body.title;
    const comment = req.body.comment;


    const newContact = new Contact({
        name,
        email,
        title,
        comment
        
    });

    newContact.save()
       .then(()=>res.json('Contact added!'))
       .catch(err => res.status(400).json('Error: '+err));
});
router.route('/:id').get((req,res)=>{
    Contact.findById(req.params.id)
        .then(contacts=>res.json(contacts))
        .catch(err => res.status(400).json('Error: '+err));
})
router.route('/:id').delete((req,res)=>{
    Contact.findByIdAndDelete(req.params.id)
        .then(() =>res.json('contacts deleted.'))
        .catch(err => res.status(400).json('Error: '+err));
})
router.route('/update/:id').post((req,res)=>{
    Contact.findById(req.params.id)
        .then(contacts=>{
            contacts.name = req.body.name;
            contacts.email = req.body.email;
            contacts.title = req.body.title;
            contacts.comment = req.body.comment;

            contacts.save()
       .then(()=>res.json('contacts update!'))
       .catch(err => res.status(400).json('Error: '+ err));
        })
        .catch(err => res.status(400).json('Error: '+ err));
})
module.exports = router;