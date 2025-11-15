// create User type interface with preferences for the counter app
export interface UserPreferences {
  theme: "light" | "dark";
  notificationsEnabled: boolean;
  itemsPerPage: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  preferences: UserPreferences;
}
