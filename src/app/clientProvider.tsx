'use client';

import useAuthState from './_hook/useAuthState';

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  useAuthState();

  return <>{children}</>;
};

export default ClientProvider;
