import React, { useState } from "react";
import {
  Card,
  Text,
  Avatar,
  Stack,
  Button,
  Divider,
  Group,
  ThemeIcon,
} from "@mantine/core";
import { useAuth0 } from "@auth0/auth0-react";
import { IconUser, IconId, IconKey } from "@tabler/icons-react";
import { jwtDecode } from 'jwt-decode';

type DataObject = Record<string, unknown>;

const Profile: React.FC = () => {
  const { user, isLoading, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [tokenInfo, setTokenInfo] = useState<DataObject | null>(null);

  const handleGetAccessToken = async () => {
    try {
      const token = await getAccessTokenSilently();
      console.log("Get access token successfully " + token)
      setAccessToken(token);

      // Decode the JWT token
      const decodedToken = jwtDecode<DataObject>(token);

      setTokenInfo(decodedToken);
    } catch (error) {
      console.error("Error getting access token:", error);
      setTokenInfo(null);
    }
  };

  const userProfileFields = [
    "name",
    "given_name",
    "family_name",
    "middle_name",
    "nickname",
    "preferred_username",
    "profile",
    "picture",
    "website",
    "email",
    "email_verified",
    "gender",
    "birthdate",
    "locale",
    "phone_number",
    "phone_number_verified",
  ];

  const renderSection = (
    title: string,
    icon: React.ReactNode,
    data: DataObject | null | undefined,
    fields?: string[]
  ) => {
    if (!data) return null;
    return (
      <>
        <Divider
          my="md"
          label={
            <Group>
              <ThemeIcon size="lg" radius="xl">
                {icon}
              </ThemeIcon>
              <Text fw={700}>{title}</Text>
            </Group>
          }
          labelPosition="center"
        />
        <Stack
          gap="xs"
          style={{
            wordBreak: "break-all",
            padding: "10px",
            background: "#f0f0f0",
            borderRadius: "5px",
            maxWidth: "100%",
            overflowWrap: "break-word",
          }}
        >
          {fields
            ? fields.map(
                (field) =>
                  data[field] !== undefined && (
                    <Text key={field}>
                      {field}: {JSON.stringify(data[field])}
                    </Text>
                  )
              )
            : Object.entries(data).map(([key, value]) => (
                <Text key={key}>
                  {key}: {JSON.stringify(value)}
                </Text>
              ))}
        </Stack>
      </>
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Card
      shadow="sm"
      padding="xl"
      radius="md"
      withBorder
      style={{
        background: "linear-gradient(45deg, #f3f3f3 0%, #ffffff 100%)",
        margin: "0 auto",
      }}
    >
      <Stack align="flex-start" gap="md">
        <Avatar
          src={user?.picture}
          size={120}
          radius={120}
          style={{
            border: "4px solid white",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        />
        <Text size="xl" fw={700} style={{ color: "#333" }}>
          {user?.name}
        </Text>

        {renderSection(
          "User Profile",
          <IconUser size={20} />,
          user as DataObject,
          userProfileFields
        )}
        {renderSection(
          "Additional Info",
          <IconId size={20} />,
          user
            ? (Object.fromEntries(
                Object.entries(user).filter(
                  ([key]) => !userProfileFields.includes(key)
                )
              ) as DataObject)
            : null
        )}

        <Button
          onClick={handleGetAccessToken}
          style={{
            background: "linear-gradient(45deg, #4a90e2 0%, #63b3ed 100%)",
            border: "none",
            boxShadow:
              "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
          }}
        >
          Get Access Token
        </Button>

        {accessToken && (
          <>
            {renderSection(
              "Access Token Info",
              <IconKey size={20} />,
              tokenInfo
            )}
            <Text
              size="sm"
              style={{
                wordBreak: "break-all",
                padding: "10px",
                background: "#f0f0f0",
                borderRadius: "5px",
                maxWidth: "100%",
                overflowWrap: "break-word",
              }}
            >
              Raw Access Token: {accessToken}
            </Text>
          </>
        )}
      </Stack>
    </Card>
  );
};

export default Profile;
