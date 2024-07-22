import React from "react";
import { Button, Stack, Text } from "@mantine/core";
import { useAuth0 } from "@auth0/auth0-react";

const Navigation: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: { returnTo: `${window.location.origin}/obourreal` },
    });
  };

  return (
    <Stack>
      {isAuthenticated ? (
        <>
          <Text>Welcome, {user?.name}</Text>
          <Button onClick={handleLogout}>Log Out</Button>
        </>
      ) : (
        <Button onClick={() => loginWithRedirect()}>Log In</Button>
      )}
    </Stack>
  );
};

export default Navigation;
