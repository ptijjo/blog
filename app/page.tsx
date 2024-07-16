import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1 className="text-6xl uppercase font-black">Langgue</h1>

      <Link href="/sign-in">
        <button className="bg-blue-500 hover:bg-blue-600 rounded-md text-white my-2"> SignIn</button>
      </Link>

      <Link href="sign-up">
        <button className="bg-blue-500 hover:bg-blue-600 rounded-md text-white my-2"> SignUp</button>
      </Link>
    </main>
  );
}
