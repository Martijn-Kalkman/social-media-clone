import Link from "next/link";

import { connectToDatabase } from "@/lib/mongoose";
import UserProfile from "@/models/user-profile";

export const dynamic = "force-dynamic";

export default async function ProfilesPage() {
  await connectToDatabase();
  const profiles = await UserProfile.find().sort({ createdAt: -1 }).lean();

  return (
    <div className="px-4 py-8">
      <div className="mx-auto w-full max-w-5xl space-y-6">
        <div className="text-left">
          <h1 className="text-2xl font-semibold">Profiles</h1>
        </div>

        {profiles.length === 0 ? (
          <p className="text-white/70">No profiles yet.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {profiles.map((profile) => (
              <Link
                key={profile._id?.toString?.()}
                href={`/profile/${profile.username}`}
                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
              >
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 text-base font-semibold text-cyan-100">
                    {profile.username[0]?.toUpperCase?.()}
                  </div>
                  <p className="text-sm text-white/70">@{profile.username}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
