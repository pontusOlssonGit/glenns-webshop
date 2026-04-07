
import { login } from "@/lib/actions/auth";

export default function Login() {


  return (
    <div className="bg-white flex flex-col items-center justify-start p-10 min-h-screen">
      <h2 className="text-3xl">Logga in</h2>
      <form
        action={login}
        className="flex flex-col p-10 min-w-3xl gap-10"
      >
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="bg-gray-200 p-2 rounded-lg"
        />
        <input
          name="password"
          type="password"
          placeholder="Lösenord"
          required
          className="bg-gray-200 p-2 rounded-lg"
        />
        <button
          type="submit"
          className="bg-blue-700 rounded-full text-white text-3xl p-2"
        >
          Logga in
        </button>
      </form>
    </div>
  );
}
