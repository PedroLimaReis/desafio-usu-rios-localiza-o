import mongoose, { Schema, Document } from "mongoose";

export interface UserDocument extends Document {
    name: string;
    email: string;
    address: string;
    coordinates: [number, number];
}

const UserSchema: Schema<UserDocument> = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    coordinates: { type: [Number], required: true },
});

const User = mongoose.model<UserDocument>('User', UserSchema);

export default User;