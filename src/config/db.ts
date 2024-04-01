import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://mongodb:27017/geojson_regions';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {});
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
