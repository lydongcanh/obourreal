import React, { useEffect } from "react";
import {
  AppShell,
  Burger,
  Group,
  Text,
  Center,
  Loader,
  Anchor,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard: React.FC = () => {
  const [opened, { toggle }] = useDisclosure();
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading || !isAuthenticated) {
    return (
      <Center style={{ height: "100vh" }}>
        <Loader size="xl" />
      </Center>
    );
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Anchor href="/" underline="never">
              <Group>
                <Image
                  src="https://res.cloudinary.com/lydongcanh-github-io/image/upload/v1633272863/obourreal/Color_logo_-_no_background_t7zfwh.svg"
                  alt="Logo"
                  width={30}
                  height={30}
                />
              </Group>
            </Anchor>
          </Group>
          <Text size="xs" fw={700}>
            v0.0.1
          </Text>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Profile />
      </AppShell.Main>
    </AppShell>
  );
};

export default Dashboard;
