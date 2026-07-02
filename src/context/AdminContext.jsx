import { createContext, useState, useEffect , useContext} from "react";
export const AdminContext = createContext();
export const AdminProvider = ({ children }) =>{

    const [admin, setAdmin] = useState(() => {
        const adminGuardado = localStorage.getItem("admin");

        return adminGuardado
        ? JSON.parse(adminGuardado)
        : null;
    });

    const login = (datos) => {
        setAdmin(datos);
    };

    const logout = () => {
        setAdmin(null);
        localStorage.removeItem("admin");
    }

    useEffect(() => {
        if (admin) {
            localStorage.setItem(
                "admin",
                JSON.stringify(admin)
            );
        }
    }, [admin]);

    return(
        <AdminContext.Provider
        value={{
            admin,
            login,
            logout
        }}
        >
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => useContext(AdminContext);