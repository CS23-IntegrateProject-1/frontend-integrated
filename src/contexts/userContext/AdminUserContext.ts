import { createContext } from "react";

export const AdminUserContext = createContext({
	adminId: -1,
	username: "",
});
