const{Schema,model} = require ("mongoose");

const userSchema = Schema({
    firstName:{
        type: String,
        required: [true, "el nombre es obligatorio"]
    },
    lastName: {
        type:String,
        required: [true, "el apellido es obligatorio"]
    },
    email:{
        type: String,
        required: [true, "el email es obligatorio"],
        unique: true
    }, 
    password:{
        type: String,
        required: [true,"la contraseña es obligatoria"]
}, 
    role: {
        type: String,
        required: [true,"el rol es obligatorio"],
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    birthDate:{
        type: Date,
        required: [true, 'La fecha de nacimiento es obligatoria'],
    },
}, { timestamps: true });

module.exports=model("User", userSchema,"users");