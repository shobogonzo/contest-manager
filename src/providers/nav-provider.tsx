'use client';

import { createContext, useState } from 'react';

interface NavContextType {
  sidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
}

const NavContext = createContext<NavContextType>({
  sidebarOpen: false,
  setSidebarOpen: () => {}
});

const NavProvider = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <NavContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </NavContext.Provider>
  );
};

export { NavContext, NavProvider };
