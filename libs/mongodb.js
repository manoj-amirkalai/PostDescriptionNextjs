import moongoose from "mongoose";
const connectMongoDB = async () => {
  try {
    await moongoose.connect(process.env.MONGODB_URI);
    console.log("db connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectMongoDB;
