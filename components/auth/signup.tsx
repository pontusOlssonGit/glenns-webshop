import { signup } from "@/lib/actions/auth";



export default function Signup() {
  return (
    <div className="bg-white flex flex-col items-center justify-start p-10">
      <h2 className="text-3xl">Skapa konto</h2>
      <form action={signup} className="flex flex-col p-10 gap-10">
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
        <button type="submit" className="bg-blue-700 rounded-full text-white text-3xl p-2">Skapa konto</button>
      </form>
    </div>
  )
}