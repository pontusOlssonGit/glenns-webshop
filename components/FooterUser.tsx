import Link from "next/link";

export default function FooterUser() {
  return (
    <main className="border flex flex-row align-text-bottom justify-center ">
      <footer>
        <Link type="email" href="glenn@gbg.se">
          Contact Glenn
        </Link>
        <form method="post">
          <input type="button" value="Send Email" />
          {/* <input type="button" value="Send Email" onClick="sendEmail()" /> */}
          <label className="p-1 ml-13 mr-13" htmlFor="email">
            Enter your email:
          </label>
          <input
            className="bg-gray-50 rounded-xl p-1 ml-3 mr-3"
            type="email"
            id="email"
            name="email"
          ></input>
          <button
            className="border rounded-2xl pl-2 pt-1 pb-1 pr-2"
            type="submit"
          >
            Send Email button
          </button>
        </form>
        <p>© 2026 Glenn Store. All rights reserved.</p>
      </footer>
    </main>
  );
}
