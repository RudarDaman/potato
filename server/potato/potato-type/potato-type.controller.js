const express = require('express');
const router = express.Router();
const potatoTypeService = require('./potato-type.service');

// routes
router.get('/getAll', getAll);
router.post('/add', add);
router.delete('/delete/:id', _delete);

module.exports = router;

//get all potato types
function getAll(req, res, next) {
    potatoTypeService.getAll()
        .then(documents => {
            if (documents) {
                res.status(200).json({
                    resource: "Get Potato Types",
                    status: "success",
                    message: "Potato types fetched successfully",
                    data: {
                        potatoTypes: documents
                    }
                })
            } else {
                res.status(400).json({
                    resource: "Get Potato Types",
                    status: "failed",
                    errorMessage: "Potato types not found"
                });
            }
        })
        .catch(err => {
            next(err);
        });
}

//add new potato type
function add(req, res, next) {
    potatoTypeService.add(req.body)
        .then(response => {
            if (response) {
                res.status(200).json({
                    resource: "New Potato Type Added",
                    status: "success",
                    message: "Potato Type Added Successfully"
                });
            } else {
                res.status(400).json({
                    resource: "New Potato Type Added",
                    status: "failed",
                    errorMessage: "Potato Type Add Failed"
                })
            }
        })
        .catch(err => {
            next(err);
        });
}

//delete specific potato type
function _delete(req, res, next) {
    potatoTypeService.delete(req.params.id)
        .then(response => {
            if (response) {
                console.log(response);
                res.status(200).json({
                    resource: "Delete Potato Type",
                    status: "success",
                    message: "Potato Type Deleted Successfully"
                });
            } else {
                res.status(400).json({
                    resource: "Delete Potato Type",
                    status: "failed",
                    errorMessage: "Potato Type not found"
                })
            }
        })
        .catch(err => {
            next(err);
        });
}
