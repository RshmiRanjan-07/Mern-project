const mongoose=require('mongoose');
exports.dbConn=async()=>{
    try{
       const dbURL ="mongodb+srv://RashmiRanjan:atlascode07@axel.lox3oqx.mongodb.net/?retryWrites=true&w=majority";
       await mongoose.connect(dbURL)
       console.log(`Database connected`);
    
    }catch(err){
        console.log(`Database connection error ${err.message}`);
    }
}