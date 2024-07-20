import { Card, Text, Avatar, Stack } from "@mantine/core";
import { useAuth0 } from "@auth0/auth0-react";

const Profile: React.FC = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack align="center" gap="md">
        <Avatar src={user?.picture} size="xl" radius="xl" />
        <Text size="xl" fw={500}>
          {user?.name}
        </Text>
        <Text size="sm" c="dimmed">
          {user?.email}
        </Text>
        <Text>Email verified: {user?.email_verified ? "Yes" : "No"}</Text>
        {user?.locale && <Text>Locale: {user.locale}</Text>}
        {user?.updated_at && (
          <Text>
            Last updated: {new Date(user.updated_at).toLocaleDateString()}
          </Text>
        )}
      </Stack>
    </Card>
  );
};

export default Profile;
