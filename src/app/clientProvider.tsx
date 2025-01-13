'use client';

import useAuth from './_hook/useAuth';

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  useAuth();

  return <>{children}</>;
};

export default ClientProvider;
