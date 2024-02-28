import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('/profile');
                setUser(response.data);
            } catch (error) {
                console.log('Error fetching user profile:', error);
            }
        };

        if (!user) {
            fetchUserProfile();
        }
    }, [user]); // Trigger effect whenever user state changes

    const updateUserAndReload = (userData) => {
        setUser(userData);
    };

    return (
        <UserContext.Provider value={{ user, updateUserAndReload }}>
            {children}
        </UserContext.Provider>
    );
}
