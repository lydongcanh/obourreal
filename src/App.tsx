import { MantineProvider, Container, Text, Title, Space, Center, Loader } from '@mantine/core';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <MantineProvider>
      <Container>
        <Center style={{ height: '100vh', flexDirection: 'column' }}>
          <Loader size="xl" variant="dots" />
          <Space h="xl" />
          <Title order={1}>
            Coming Soon
          </Title>
          <Space h="md" />
          <Text size="lg">
            Our website is under construction. We&apos;ll be here soon with our new awesome site.
          </Text>
          <LoginButton />
          <LogoutButton />
          <UserProfile />
        </Center>
      </Container>
    </MantineProvider>
  );
}

export default App;
