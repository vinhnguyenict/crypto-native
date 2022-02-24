import React from 'react';

interface IState {}

const AuthContext = React.createContext<IState>({} as IState);

const AuthProvider: React.FC = ({children}) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export {AuthProvider as default, AuthContext};
