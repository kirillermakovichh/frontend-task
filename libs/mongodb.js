import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://owner:qerpofpodgjjopdf@cluster0.9p6piau.mongodb.net/management");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
