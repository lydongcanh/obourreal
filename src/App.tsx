import { MantineProvider, Container, Text, Title, Space, Center, Loader } from '@mantine/core';

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
        </Center>
      </Container>
    </MantineProvider>
  );
}

export default App;
