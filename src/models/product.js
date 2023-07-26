const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    title:{
        type: String,
        required: [true, 'El título del producto es obligatorio']
    },
    description:{
        type: String,
        required: [true, 'La descripción del producto es obligatoria']
    },
    price:{
        type: Number,
        required: [true, 'El precio del producto es obligatorio']
    },
    stock:{
        type: Number,
        required: [true, 'El stock del producto es obligatorio']    
    },
    image:{
        type: String,
        required: [true, 'La imagen del producto es obligatoria']
    },
    category:{
        type: String,
        required: [true, 'La categoría del producto es obligatoria'],
        // enums category beers
        enums:['amber', 'lager'],
    },
    discount:{
        type: Number,
        required: [true, 'El descuento del producto es obligatorio']
    },

}, { timestamps: true });

module.exports = model('Product', ProductSchema, 'products');