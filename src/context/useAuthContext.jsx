import { createContext, useState } from "react";

export const AuthContext  = createContext();

export default function AuthProvider({children}) {
  const [isAuth, setIsAuth] = useState(false);
  const valueData = {isAuth, setIsAuth}
  return (
    <AuthContext.Provider value={valueData}>
      {children}
    </AuthContext.Provider>
  )
}


