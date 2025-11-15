// create user data mock using the User type
// Extend to user array of 5

import type { User } from "../types/user";

const mockUserData: User[] = [
  {
    id: "user_123",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    preferences: {
      theme: "light",
      notificationsEnabled: true,
      itemsPerPage: 10,
    },
  },
  {
    id: "user_124",
    name: "John Smith",
    email: "john.smith@example.com",
    preferences: {
      theme: "dark",
      notificationsEnabled: false,
      itemsPerPage: 5,
    },
  },
  {
    id: "user_125",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    preferences: {
      theme: "light",
      notificationsEnabled: true,
      itemsPerPage: 20,
    },
  },
  {
    id: "user_126",
    name: "Bob Brown",
    email: "bob.brown@example.com",
    preferences: {
      theme: "dark",
      notificationsEnabled: true,
      itemsPerPage: 15,
    },
  },
  {
    id: "user_127",
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    preferences: {
      theme: "light",
      notificationsEnabled: false,
      itemsPerPage: 10,
    },
  },
];

export default mockUserData;
