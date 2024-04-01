import mongoose, { Schema, Document } from 'mongoose';

export interface RegionDocument extends Document {
  name: string;
  coordinates: [[number, number]];
  user: mongoose.Types.ObjectId;
}

const RegionSchema: Schema<RegionDocument> = new Schema({
  name: { type: String, required: true },
  coordinates: { type: [[[Number]]], required: true }, 
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

const Region = mongoose.model<RegionDocument>('Region', RegionSchema);

export default Region;
