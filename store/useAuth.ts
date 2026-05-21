import { create } from 'zustand';

interface User {
  nama: string; email: string; role: string; kelas: string; student_id?: string;
}
interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null, // Set null default. Saat login, data masuk ke sini
  setUser: (user) => set({ user }),
  logout: () => set({ user: null })
}));
