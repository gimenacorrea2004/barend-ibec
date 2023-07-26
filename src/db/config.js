const mongoose= require ("mongoose");

const dbconection = async ()=> {
   
    try{
        
        const result= await mongoose.connect("mongodb+srv://correagimena000:wPJVvMbidQ0eNIz1@cluster0.iafrb61.mongodb.net/")
   console.log("resultado de la coneccion: ok", result.connection.id);
    
}catch(error){
        console.log(error);
    throw new error ("error al conectar a la base de datos:");
    }
}
module.exports=dbconection;


