import mongoose from "mongoose";
const connectMoongo = async () => {
   await mongoose.connect( "mongodb+srv://wilfridorg:NnpfZezybmv4hf6T@cluster0.6or7bse.mongodb.net/?retryWrites=true&w=majority")
   try {
    console.log("conectado exitosamente");
   } catch (error) {
    console.log("hay error");
   }
}


export default connectMoongo