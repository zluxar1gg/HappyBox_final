import React, { createContext, useContext } from 'react';

interface PortalContextType {
  openPortal: () => void;
}

const PortalContext = createContext<PortalContextType>({
  openPortal: () => {},
});

export const PortalProvider: React.FC<{ openPortal: () => void; children: React.ReactNode }> = ({
  openPortal,
  children,
}) => (
  <PortalContext.Provider value={{ openPortal }}>
    {children}
  </PortalContext.Provider>
);

export const usePortal = () => useContext(PortalContext);
