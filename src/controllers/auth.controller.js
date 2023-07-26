const response=require ("express");
const User= require ("../models/user");
const bcrypt= require("bcrypt");

const register= async (req,res=response) => {

    try{
        const salt= bcrypt.genSaltSync();
        req.body.password= bcrypt.hashSync(req.body.password,salt);

        const newUser = await User.create(req.body);
        newUser.password=undefined;

        res.status(201).json({
            ok:true,
            msg: "usuario creado correctamente",
            data : newUser
        })
    }catch (error){
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: "error al registrar el usuario",
            error
        })
    }

}

const login= async(req,res=response)=> {

    try 
    {
    const {email, password}= req.body;
    const user= await User.findOne({email});
if(!user) {
    return res.status(400).json ({
ok: false,
msg:" email o contraseña incorrectos"
  
})
  
}

const validPassword = bcrypt.compareSync(password, user.password);
if(!validPassword) {
    return res.status(400).json ({
        ok:false,
        msg: "email o contraseña incorrectos"
    })
}

res.status(200).json ({
    ok: true,
    msg: " usuario logueado correctamente",
    data: user
})


console.log(req.body)


    }catch(error){
        console.log(error)
        res.status(500).json({
            ok:false,
            msg :"error al iniciar sesion",
            error
        })
    }

    }

    const getUsers= async (req,res= response)=> {
        try {

            const users= await User.find();
            res.status(200).json ({
            ok: true,
            msg: "usuarios obtenidos correctamente",
            data:users
        })
        } catch(error) {
            console.log(error);
            res.status(500).json ({
                ok:false,
                msg:"error al obtener usuarios",
                error
            })
        }

    }

    const getUserById= async(req,res= response)=> {
    try {

        const {id}= req.params;
        const user= await User.findById(id);

        if(!user) {
            return res.status(404).json ({
                ok:false,
               msg: "usuario no encontrado" 
            })
        }

res.status(200).json ({
    ok:true,
    msg: "usuario obtenido correctamente",
    data: user
})
    
    } catch (error) {
        console.log(error);
            res.status(500).json ({
                ok:false,
                msg:"error al obtener usuario",
                error
            })
    }
    }

    module.exports= {
        register,
        login,
        getUsers,
        getUserById
    }
    
