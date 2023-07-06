"use server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const ProtectedServer = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>
        This is a <i style={{ color: "red" }}>Server -side</i>Protected page
      </h1>
      <p>
        You are logged in as : <b>{session?.user?.name}</b>
      </p>
    </div>
  );
};

export default ProtectedServer;
