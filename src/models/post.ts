import mongoose, { Schema, model, models } from "mongoose";

export type PostDocument = mongoose.Document & {
  authorId: mongoose.Types.ObjectId;
  content: string;
  mediaUrl?: string;
  likeCount: number;
  commentCount: number;
  createdAt: Date;
  updatedAt: Date;
};

const postSchema = new Schema<PostDocument>(
  {
    authorId: { type: Schema.Types.ObjectId, ref: "UserProfile", required: true },
    content: { type: String, required: true, trim: true, maxlength: 2000 },
    mediaUrl: { type: String, trim: true },
    likeCount: { type: Number, default: 0, min: 0 },
    commentCount: { type: Number, default: 0, min: 0 },
  },
  {
    timestamps: true,
    collection: "posts",
  }
);

const Post = models.Post || model<PostDocument>("Post", postSchema);

export default Post;

