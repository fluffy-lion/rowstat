// import { connectToDataBase } from "@db/database";
import dbConnect from "@/db/database";
import Text from "@/models/Text";

export const POST = async (request) => { 
  try {
    await dbConnect()    
    //return logic here   
    const { text } = await request.json()
    
    const textEntry = await Text.create({
      text
    })
    return new Response(JSON.stringify({ success: true, data: textEntry }), {
      status: 201,
    });
  } catch (error) {
    //return logic here
    return new Response('failed to post', {
        status: 500
    })
  }
};