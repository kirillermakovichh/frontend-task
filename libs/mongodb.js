import mongoose from "mongoose";

/**
 * The function `connectMongoDB` connects to a MongoDB database using the Mongoose library.
 */
const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://owner:qerpofpodgjjopdf@cluster0.9p6piau.mongodb.net/management");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
