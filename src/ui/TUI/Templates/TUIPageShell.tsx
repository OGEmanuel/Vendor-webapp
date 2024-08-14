import { Box, Container, Divider, Group, Text, Title } from '@mantine/core';

export default function TUIPageShell({
  children,
  right,
  title,
  caption,
}: {
  children: React.ReactNode;
  title: string;
  caption?: string;
  right?: React.ReactNode;
}) {
  return (
    <Box>
      <Box bg="white" p={'md'}>
        <Container fluid size={'xl'} px="0">
          <Group>
            <Box flex={1}>
              <Title order={3}>{title}</Title>
              {caption && <Text>{caption}</Text>}
            </Box>
            <Box>{right}</Box>
          </Group>
        </Container>
      </Box>
      <Divider />
      <Container fluid size={'xl'} p={'md'}>
        {children}
      </Container>
    </Box>
  );
}
