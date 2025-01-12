import { createContext, useState } from "react";

// 建立 UserContext
export const UserContext = createContext();

// UserProvider 負責提供登入狀態和更新方法
export const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false); // 管理登入狀態

  const login = () => setIsLogin(true);  // 模擬登入
  const logout = () => setIsLogin(false); // 模擬登出

  return (
    <UserContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};