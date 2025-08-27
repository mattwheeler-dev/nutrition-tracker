import { create } from "zustand";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

type AuthState = {
	user: User | null;
	loading: boolean;
	setUser: (user: User | null) => void;
	checkSession: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
	user: null,
	loading: true,
	setUser: (user) => set({ user }),
	checkSession: async () => {
		const { data } = await supabase.auth.getSession();
		set({ user: data.session?.user ?? null, loading: false });
	},
}));
