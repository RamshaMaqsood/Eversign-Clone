export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="w-[100px] rounded-full  bg-blue-500 text-white p-3 font-semibold hover:bg-blue-600 transition flex items-center justify-center"
            href="/login"
          >
            Login
          </a>
          <a
            className="w-[100px] rounded-full  bg-blue-500 text-white p-3 font-semibold hover:bg-blue-600 transition flex items-center justify-center"
            href="/signup"
          >
            Sign Up
          </a>

          <a
            className="w-[100px] rounded-full  bg-blue-500 text-white p-3 font-semibold hover:bg-blue-600 transition flex items-center justify-center"
            href="/addBuisness"
          >
            Buisness
          </a>

          <a
            className="w-[100px] rounded-full  bg-blue-500 text-white p-3 font-semibold hover:bg-blue-600 transition flex items-center justify-center"
            href="/dashboard"
          >
            Dashboard
          </a>
        </div>
      </main>
    </div>
  );
}
