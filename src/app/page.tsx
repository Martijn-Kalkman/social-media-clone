import { connectToDatabase } from "@/lib/mongoose";
import UserProfile from "@/models/user-profile";

export default async function Home() {
  await connectToDatabase();
  const profiles = await UserProfile.find().lean();

  return (
    <main className="min-h-screen flex justify-center px-4 py-8">
      <div className="w-full max-w-2xl text-center space-y-4">
        <h1 className="text-2xl font-semibold">User profiles</h1>
        {profiles.length === 0 ? (
          <p>No profiles found. Add some to see them here.</p>
        ) : (
          <div className="space-y-6">
            {profiles.map((profile) => (
              <div key={profile._id.toString()} className="space-y-1">
                <p>@{profile.username}</p>
                <p>{profile.displayName || profile.username}</p>
                {profile.bio ? <p>{profile.bio}</p> : null}
                <p>{profile.location ? `Location: ${profile.location}` : "Location: n/a"}</p>
                {profile.website ? (
                  <p>
                    <a href={profile.website} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                      {profile.website}
                    </a>
                  </p>
                ) : null}
                <hr className="border-zinc-200" />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
