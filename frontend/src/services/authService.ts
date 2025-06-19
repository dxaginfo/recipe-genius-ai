import api from './api';
import { LoginCredentials, RegisterData, User } from '../types';

const login = async (credentials: LoginCredentials) => {
  const response = await api.post<{ user: User; token: string }>('/auth/login', credentials);
  localStorage.setItem('token', response.data.token);
  return response.data;
};

const register = async (data: RegisterData) => {
  const response = await api.post<{ user: User; token: string }>('/auth/register', data);
  localStorage.setItem('token', response.data.token);
  return response.data;
};

const getCurrentUser = async () => {
  const response = await api.get<User>('/auth/me');
  return response.data;
};

const logout = () => {
  localStorage.removeItem('token');
  return true;
};

const authService = {
  login,
  register,
  getCurrentUser,
  logout,
};

export default authService;