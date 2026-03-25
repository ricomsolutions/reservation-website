export interface User {
  id: string;
  name: string;
  email: string;
  role: "USER" | "SUPER_ADMIN";
  status: "ACTIVE" | "SUSPENDED";
  createdAt: string;
}

export interface Reservation {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  partySize: number;
  date: string;
  time: string;
  message: string | null;
  status: "PENDING" | "CONFIRMED" | "CANCELLED";
  userId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  read: boolean;
  createdAt: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number | null;
  discount: number | null;
  createdAt: string;
}

export interface ActivityLog {
  id: string;
  action: string;
  details: string | null;
  userId: string | null;
  ipAddress: string | null;
  createdAt: string;
}

export interface AuthPayload {
  userId: string;
  email: string;
  role: "USER" | "SUPER_ADMIN";
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
