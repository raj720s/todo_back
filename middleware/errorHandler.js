function errorHandler(error, req, res, next) {
    const errorResponse = {

        message: error.message,
        lineNumber: error.stack.split('\n')[1], // Extract the line number from the stack trace
        data: error.data, // Replace 'data' with the relevant error data property

    };
    res.status(error.status || 500)
        .json({
            status: false, error: errorResponse
        })
}
module.exports = errorHandler