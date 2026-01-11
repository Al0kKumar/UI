import { Password } from "../components/Password";

export default function PasswordPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h2 className="text-2xl font-bold mb-4">
        Password 
      </h2>
      <Password />
    </div>
  );
}
