import { Box, Container, Divider, Group, Text, Title } from '@mantine/core';

export default function TUIPageShell({
  children,
  right,
  title,
  caption,
  tabs,
}: {
  children: React.ReactNode;
  title: string;
  caption?: string;
  right?: React.ReactNode;
  tabs?: React.ReactNode;
}) {
  return (
    <Box>
      <Box bg="white" px={'md'} pt={'md'}>
        <Container fluid size={'xl'} px="0" mb={40}>
          <Group>
            <Box flex={1}>
              <Title order={3}>{title}</Title>
              {caption && <Text c={'#7E7E80'}>{caption}</Text>}
            </Box>
            <Box>{right}</Box>
          </Group>
        </Container>
        {tabs}
      </Box>
      <Divider />
      <Container fluid size={'xl'}>
        {children}
      </Container>
    </Box>
  );
}
