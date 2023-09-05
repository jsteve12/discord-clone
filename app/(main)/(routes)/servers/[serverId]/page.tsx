import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const ServerIdPage = async () => {
  const profile = await currentProfile();
  if (!profile) return redirect("/");

  const servers = await db.server.findMany({
    where: {
      members: {
        some: { profileId: profile.id },
      },
    },
  });

  return <div>Server Page</div>;
};

export default ServerIdPage;