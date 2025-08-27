import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";

type Props = {
	children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
	const user = useAuthStore((state) => state.user);

	if (!user) {
		// Redirect to login if not authenticated
		return <Navigate to="/login" replace />;
	}

	return <>{children}</>;
}
