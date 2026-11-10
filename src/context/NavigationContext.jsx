import React, { createContext, useContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  // Read path from window or default to 'home'
  const getInitialRoute = () => {
    const path = window.location.pathname.replace(/^\/|\/$/g, '');
    if (!path || path === 'index.html') return { page: 'home', param: null };
    if (path.startsWith('work/')) return { page: 'work-detail', param: path.replace('work/', '') };
    if (path.startsWith('post/')) return { page: 'post-detail', param: path.replace('post/', '') };
    return { page: path, param: null };
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  const navigate = (page, param = null) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentRoute({ page, param });
  };

  return (
    <NavigationContext.Provider value={{ currentRoute, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
