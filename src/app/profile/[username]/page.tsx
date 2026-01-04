import { notFound } from "next/navigation";

import { connectToDatabase } from "@/lib/mongoose";
import Post from "@/models/post";
import UserProfile from "@/models/user-profile";

export const dynamic = "force-dynamic";

type Params = {
  params: Promise<{
    username: string;
  }>;
};

export default async function ProfilePage({ params }: Params) {
  const resolvedParams = await params;
  const username = resolvedParams?.username?.toLowerCase?.();

  if (!username) {
    notFound();
  }

  await connectToDatabase();

  const profile = await UserProfile.findOne({ username }).lean();
  if (!profile) {
    notFound();
  }

  const posts = await Post.find({ authorId: profile._id })
    .sort({ createdAt: -1 })
    .lean();

  return (
    <div className="flex justify-center px-4 py-8">
      <div className="w-full max-w-3xl space-y-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
          <div className="flex flex-col gap-3 text-left">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-semibold">{profile.displayName}</h1>
                <p className="text-sm text-white/70">@{profile.username}</p>
              </div>
            </div>
            {profile.bio ? <p className="text-white/80">{profile.bio}</p> : null}
            <div className="flex flex-wrap gap-4 text-sm text-white/70">
              <span>{profile.location || "Location: n/a"}</span>
              {profile.website ? (
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-200 underline"
                >
                  {profile.website}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

