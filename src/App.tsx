import React from "react";
import { MantineProvider } from "@mantine/core";
import Dashboard from "./components/Dashboard";
import { Auth0Provider } from "@auth0/auth0-react";

const App: React.FC = () => {
  return (
    <Auth0Provider
      domain="obourreal.au.auth0.com"
      clientId="qcLlYLHLQCan4ONxg6xDXz0gKviAwWyn"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <MantineProvider>
        <Dashboard />
      </MantineProvider>
    </Auth0Provider>
  );
};

export default App;
