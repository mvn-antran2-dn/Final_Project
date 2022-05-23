import { useState } from "react";
import { useHistory } from "react-router-dom";

const UserAuth = () => {
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [isLogin, setIsLogin] = useState(!!user);
  const history = useHistory();

  const login = (username, password) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        localStorage.setItem('user', JSON.stringify({ username }));
        setUser({ username });
        setIsLogin(true);
        history.push('/home');
        res({ username });
      }, 1000);
    });
  }
  const logout = () => {
    localStorage.removeItem('user');
    setIsLogin(false);
    history.push('/login');
  }

  return { isLogin, login, logout }

}

export default UserAuth;
