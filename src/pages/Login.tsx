import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function handleLogin(e: React.FormEvent) {
		e.preventDefault();
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		if (error) alert(error.message);
	}

	return (
		<>
			<main className="flex flex-col items-center justify-center min-h-screen p-4">
				<h1 className="text-2xl font-bold">Welcome to Nomify</h1>
				<p className="mt-2">
					Track your meals, hit your goals, live your life!
				</p>

				<form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
					<input
						type="email"
						placeholder="Email"
						className="w-full p-2 border rounded"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="Password"
						className="w-full p-2 border rounded"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						type="submit"
						className="w-full p-2 bg-blue-600 text-white rounded"
					>
						Log In
					</button>
				</form>
			</main>
		</>
	);
}
