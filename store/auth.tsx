import { create } from 'zustand';

export type AuthStoreType = {
  user: { name: string };
  isAuthenticated: boolean;
};

const useAuth = create<AuthStoreType>((set) => ({
  user: { name: 'amr' },
  isAuthenticated: false,
}));

export default useAuth;
