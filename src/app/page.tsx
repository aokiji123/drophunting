import Login from "@/app/auth/login/page";
import Profile from "@/app/profile/page";

export default function Home() {
  const isUserLoggedIn = true;

  return (
    <div className="bg-black overflow-auto">
      {isUserLoggedIn ? <Profile /> : <Login />}
    </div>
  );
}
