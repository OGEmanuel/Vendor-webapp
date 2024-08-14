import { AspectRatio, Box, Center, Grid, Group, Rating, Stack, Text, Title } from '@mantine/core';
import { OutletSummary } from '@/sdk/vendor';
import Card from '@/ui/TUI/Components/Card';
import noComments from '@/ui/assets/illustrations/noComments.svg';
export default function OutletRatings({}: { outletSummary: OutletSummary }) {
  return (
    <Box>
      <Grid>
        <Grid.Col span={{ md: 6 }}>
          <Card title="Ratings">
            <Grid>
              <Grid.Col span={6}>
                <AspectRatio>
                  <Center>
                    <Title style={{ fontSize: 62 }}>5.0</Title>
                    <Text>Ratings</Text>
                  </Center>
                </AspectRatio>
              </Grid.Col>
              <Grid.Col span={6}>
                <AspectRatio>
                  <Center>
                    <Box>
                      <Group>
                        <Rating value={5} size={'xl'} color="tukshopp" />
                        <Text>(0)</Text>
                      </Group>
                      <Group>
                        <Rating value={4} size={'xl'} color="tukshopp" />
                        <Text>(0)</Text>
                      </Group>
                      <Group>
                        <Rating value={3} size={'xl'} color="tukshopp" />
                        <Text>(0)</Text>
                      </Group>
                      <Group>
                        <Rating value={2} size={'xl'} color="tukshopp" />
                        <Text>(0)</Text>
                      </Group>{' '}
                      <Group>
                        <Rating value={1} size={'xl'} color="tukshopp" />
                        <Text>(0)</Text>
                      </Group>
                    </Box>
                  </Center>
                </AspectRatio>
              </Grid.Col>
            </Grid>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ md: 6 }}>
          <Card title="Comments">
            <AspectRatio>
              <Center>
                <Stack ta={'center'}>
                  <Center>
                    <img src={noComments} width={100} />
                  </Center>
                  <Box>
                    <Text fw={'bold'}>No comments</Text>
                    <Text size="sm" c={'dimmed'}>
                      Comments will appear hear once customers start sharing feedback
                    </Text>
                  </Box>
                </Stack>
              </Center>
            </AspectRatio>
          </Card>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
