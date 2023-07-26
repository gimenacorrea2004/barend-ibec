const response = require('express'); 
const Product = require('../models/product');  


const createProduct = async(req, res = response) => { 
    try {
        const newProduct = await Product.create(req.body); 

        res.status(201).json({
            ok: true,
            msg: 'Producto creado correctamente',
            data: newProduct
        })
        
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al crear producto',
            error
        })
    }
}

const getProducts = async(req, res = response) => { 
    try {
        const products = await Product.find();

        res.status(200).json({
            ok: true,
            msg: 'Productos obtenidos correctamente',
            data: products
        })

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener productos',
            error
        })
    }

};


const updateProduct = async(req, res = response) => { 
    try {
        const { id } = req.params; 

        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new: true}); 
        await updatedProduct.save(); 

        
        if(!updatedProduct) { 
            return res.status(404).json({ 
                ok: false,
                msg: 'Producto no encontrado'
            })
        }

       
        res.status(200).json({
            ok: true,
            msg: 'Producto actualizado correctamente',
            data: updatedProduct
        })

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar producto',
            error
        })
    }
}

const deleteProduct = async(req, res = response) => { 
    try {
        const { id } = req.params; 

        const deletedProduct = await Product.findByIdAndDelete(id);  

       
        if(!deletedProduct) { 
            return res.status(404).json({ 
                ok: false,
                msg: 'Producto no encontrado'
            })
        }

       
        res.status(200).json({
            ok: true,
            msg: 'Producto eliminado correctamente',
            data: deletedProduct
        })

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al eliminar producto',
            error
        })
    }
}



module.exports = {
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
}