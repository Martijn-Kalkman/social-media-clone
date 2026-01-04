import mongoose, { Schema, model, models } from "mongoose";

export type UserProfileDocument = mongoose.Document & {
  username: string;
  displayName?: string;
  bio?: string;
  avatarUrl?: string;
  website?: string;
  location?: string;
  createdAt: Date;
  updatedAt: Date;
};

const userProfileSchema = new Schema<UserProfileDocument>(
  {
    username: { type: String, required: true, unique: true, trim: true, lowercase: true },
    displayName: { type: String, trim: true },
    bio: { type: String, trim: true, maxlength: 500 },
    avatarUrl: { type: String, trim: true },
    website: { type: String, trim: true },
    location: { type: String, trim: true },
  },
  {
    timestamps: true,
    collection: "user-profiles",
  }
);

const UserProfile = models.UserProfile || model<UserProfileDocument>("UserProfile", userProfileSchema);

export default UserProfile;

