export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  active: boolean;
  lastLogin: string;
}

export const users: User[] = [
  {
    id: 12345671,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    active: true,
    lastLogin: "2025-06-20",
  },
  {
    id: 12345672,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Editor",
    status: "Active",
    active: false,
    lastLogin: "2025-06-18",
  },
  {
    id: 12345673,
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "User",
    status: "Active",
    active: false,
    lastLogin: "2025-06-19",
  },
  {
    id: 12345674,
    name: "Sara Lee",
    email: "sara@example.com",
    role: "User",
    status: "Active",
    active: false,
    lastLogin: "2025-06-22",
  },
  {
    id: 12345675,
    name: "Mike Davis",
    email: "mike@example.com",
    role: "Manager",
    status: "Inactive",
    active: true,
    lastLogin: "2025-06-15",
  },
  {
    id: 12345676,
    name: "Lara Stone",
    email: "lara@example.com",
    role: "Admin",
    status: "Inactive",
    active: true,
    lastLogin: "2025-06-21",
  },
  {
    id: 12345677,
    name: "Tom Hardy",
    email: "tom@example.com",
    role: "User",
    status: "Inactive",
    active: false,
    lastLogin: "2025-06-14",
  },
  {
    id: 12345678,
    name: "Emily Clark",
    email: "emily@example.com",
    role: "User",
    status: "Inactive",
    active: true,
    lastLogin: "2025-06-17",
  },
  {
    id: 12345679,
    name: "Jake Hall",
    email: "jake@example.com",
    role: "Manager",
    status: "Active",
    active: false,
    lastLogin: "2025-06-13",
  },
  {
    id: 12345670,
    name: "Nina Brown",
    email: "nina@example.com",
    role: "Editor",
    status: "Active",
    active: true,
    lastLogin: "2025-06-19",
  },
  {
    id: 12345611,
    name: "Chris Young",
    email: "chris@example.com",
    role: "Admin",
    status: "Active",
    active: false,
    lastLogin: "2025-06-20",
  },
  {
    id: 12345612,
    name: "Zara Khan",
    email: "zara@example.com",
    role: "User",
    status: "Inactive",
    active: true,
    lastLogin: "2025-06-16",
  },
];
