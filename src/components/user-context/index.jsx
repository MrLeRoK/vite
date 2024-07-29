import { createContext, useContext, useState, useCallback } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const toggleUser = useCallback(() => {
        setUser((prevUser) => (prevUser ? null : { name: "Alex" }));
    }, []);

    return (
        <UserContext.Provider value={{ user, toggleUser }}>
            {children}
        </UserContext.Provider>
    );
};
