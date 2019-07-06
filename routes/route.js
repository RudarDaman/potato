const express = require('express');
const router = express.Router();

const PotatoType = require('../models/potato-type');

//get all potato types
router.get('/potato/type/getAll', (req, res, next) => {
    PotatoType.find()
        .then(documents => {
            res.status(200).json({
                resource: "Get Potato Types",
                status: "success",
                message: "Potato Types fetched successfully",
                data: {
                    potatoTypes: documents
                }
            });
        });
});

//add new potato type
router.post('/potato/type/add', (req, res, next) => {
    const potatoType = new PotatoType({
        name: req.body.name,
        timestamp: Date.now()
    });
    potatoType.save()
        .then(() => {
            res.status(201).json({
                resource: "New Potato Type Added",
                status: "success",
                message: "Potato Type Added Successfully"
            });
        })
        .catch(err => {
            res.status(400).json({
                resource: "New Potato Type Added",
                status: "failed",
                errorMessage: "Potato Type Add Failed"
            })
        });
});

//delete specific potato type
router.delete('/potato/type/delete/:id', (req, res, next) => {
    PotatoType.findOneAndDelete({_id: req.params.id},
        (err, result) => {
            if(result === null) {
                res.status(400).json({
                    resource: "Delete Potato Type",
                    status: "failed",
                    errorMessage: "Potato Type not found"
                })
            }
        })
        .then(result => {
            console.log(result);
            res.status(200).json({
                resource: "Delete Potato Type",
                status: "success",
                message: "Potato Type Deleted Successfully"
            });
        }).catch(() => {
            res.status(400).json({
                resource: "Delete Potato Type",
                status: "failed",
                errorMessage: "Potato Type not found"
            })
        });
});

module.exports = router;
