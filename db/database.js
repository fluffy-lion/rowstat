import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI

if(!MONGODB_URI){
    throw new Error(
        "please define mongodb_uri env varibale"
    )
}

let cached = { conn: null, promise: null };

async function dbConnect() {
    if(cached.conn){
        return cached.conn
    }

    if(!cached.promise) {
        const opt = {
            bufferCommands: false
        }
        cached.promise = mongoose.connect(MONGODB_URI)
    }
try {
    cached.conn = await cached.promise
} catch (error) {
    cached.promise = null
     throw error
}
return cached.conn

}

export default dbConnect

// import mongoose from "mongoose";
//  let isConnected = false

//  export const connectToDatabase = async () => {
//     mongoose.set("strictQuery", true)
//     if(isConnected) {
//         console.log("db connected already")
//     }
//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             dbName: "my-rowing-stats",
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         })
//         isConnected = true
//     } catch (error) {
//         console.log(error)
//     }
//  }