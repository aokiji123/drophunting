import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-white">404</h1>
      <p className="text-2xl text-white">Page not found</p>
      <Link
        href="/"
        className="text-blue-500 mt-4 hover:text-blue-600 hover:underline"
      >
        Go back to home
      </Link>
    </div>
  );
}
