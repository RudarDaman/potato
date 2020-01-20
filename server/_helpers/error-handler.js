module.exports = errorHandler;

function errorHandler(err, req, res, next) {

    if (!err) {
        return res.status(400).json({
            resource: "",
            status: "failed",
            errorMessage: "Invalid Request"
        });
    }

    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).json({
            resource: "",
            status: "failed",
            errorMessage: err
        });
    }

    if (err.name === 'ValidationError') {
        // mongoose validation error
        return res.status(400).json({
            resource: "",
            status: "failed",
            errorMessage: err.message
        });
    }

    if (err.name === 'UnauthorizedError') {
        // jwt authentication error
        return res.status(401).json({
            resource: "",
            status: "failed",
            errorMessage: "Invalid Token"
        });
    }

    // default to 500 server error
    return res.status(500).json({
        resource: "",
        status: "failed",
        errorMessage: err.message
    });
}
