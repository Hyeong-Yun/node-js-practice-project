import { createContent, useEffect } from "react";
import Login from "../pages/Login";

const AuthContext = createContent({});

export function AuthProvider({ authService }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    authService;
  }, [authService]);
}

export default AuthContext;
