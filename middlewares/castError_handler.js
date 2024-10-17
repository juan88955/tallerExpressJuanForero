const castError_handler = (error, req, res, next) => {
    console.log(error);
    
    if (error.name === 'CastError') {
        return res.status(400).json({
            success: false,
            message: 'Error de tipo de dato',
            error: `El valor '${error.value}' no es válido para el campo '${error.path}'. Debe ser de tipo ${error.kind}.`
        });
    }
};

export default castError_handler;