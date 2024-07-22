import React from "react";
import {
  NavLink,
  Stack,
  Text,
  Avatar,
  Group,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import {
  IconDashboard,
  IconNews,
  IconChartBar,
  IconFileText,
  IconSettings,
  IconLock,
  IconLogout,
} from "@tabler/icons-react";
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar: React.FC = () => {
  const { user, logout } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: { returnTo: `${window.location.origin}/obourreal` },
    });
  };

  return (
    <Stack gap="xs" h="100%">
      <NavLink label="Dashboard" leftSection={<IconDashboard size="1rem" />} />

      <NavLink
        label="Market news"
        leftSection={<IconNews size="1rem" />}
        childrenOffset={28}
      >
        <NavLink label="Overview" />
        <NavLink label="Forecasts" />
        <NavLink label="Outlook" />
        <NavLink label="Real time" />
      </NavLink>

      <NavLink label="Releases" leftSection={<IconFileText size="1rem" />} />
      <NavLink label="Analytics" leftSection={<IconChartBar size="1rem" />} />
      <NavLink label="Contracts" leftSection={<IconFileText size="1rem" />} />
      <NavLink label="Settings" leftSection={<IconSettings size="1rem" />} />
      <NavLink label="Security" leftSection={<IconLock size="1rem" />} />

      <Group mt="auto" pt="xl" justify="space-between" align="center">
        <Group>
          <Avatar src={user?.picture} radius="xl" />
          <div>
            <Text size="sm" fw={500}>
              {user?.name}
            </Text>
            <Text size="xs" c="dimmed">
              {user?.email}
            </Text>
          </div>
        </Group>
        <Tooltip label="Logout">
          <ActionIcon
            variant="subtle"
            color="red"
            onClick={handleLogout}
            aria-label="Logout"
          >
            <IconLogout size="1.2rem" />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Stack>
  );
};

export default Sidebar;
