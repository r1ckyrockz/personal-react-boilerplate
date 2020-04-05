import React, { PropsWithChildren } from 'react';

import { Auth0Context, Auth0ContextDefinition } from '../context/Auth0/context';

export const createAuthWrapper = (
  partial?: Partial<Auth0ContextDefinition>
) => ({ children }: PropsWithChildren<{}>) => {
  const value = {
    loginWithPopup: jest.fn(),
    logout: jest.fn(),
    handleRedirectCallback: jest.fn(),
    getIdTokenClaims: jest.fn(),
    loginWithRedirect: jest.fn(),
    getTokenSilently: jest.fn(),
    getTokenWithPopup: jest.fn(),
    isPopupOpen: false,
    isAuthenticated: false,
    isInitializing: false,
    user: undefined,
    ...partial,
  };

  return (
    <Auth0Context.Provider value={value}>{children}</Auth0Context.Provider>
  );
};
