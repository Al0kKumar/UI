import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">
        Frontend UI Practice
      </h1>

      <ul className="space-y-4">
        <li>
          <Link
            to="/password"
            className="text-blue-400 hover:underline"
          >
             Password
          </Link>
        </li>

        
      </ul>
    </div>
  );
}
