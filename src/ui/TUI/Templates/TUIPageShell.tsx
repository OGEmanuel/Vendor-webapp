import { Box, Container, Divider, Group, Title } from '@mantine/core';

export default function TUIPageShell({
  children,
  right,
  title,
}: {
  children: React.ReactNode;
  title: string;
  right?: React.ReactNode;
}) {
  return (
    <Box>
      <Box bg="white" p={'md'}>
        <Container fluid size={'xl'} px="0">
          <Group>
            <Box flex={1}>
              <Title order={3}>{title}</Title>
            </Box>
            <Box>{right}</Box>
          </Group>
        </Container>
      </Box>
      <Divider />
      <Container fluid size={'xl'}  p={'md'}>
        {children}
      </Container>
    </Box>
  );
}
