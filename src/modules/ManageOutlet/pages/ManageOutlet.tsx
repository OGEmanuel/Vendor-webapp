import { ActionIcon, Box, Button, Container, Group, Menu, Tabs, Text, Title } from '@mantine/core';
import useGetOutletQuery from '../hooks/useGetOutlet';
import { MoreVerticalIcon } from 'hugeicons-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import OutletDetails from './OutletDetails';
import OutletAvailability from './OutletAvailability';
import OutletRatings from './OutletRatings';
import useOutletActions from '../hooks/useOutletActions';

export default function ManageOutlet() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { data: summary } = useGetOutletQuery();
  const { editOutlet,closeOutletTemporarily } = useOutletActions();

  return (
    <Tabs
      defaultValue={params.get('tabId') ?? 'details'}
      color="dark"
      onChange={(value) => navigate(`?tabId=${value}`)}
    >
      <Box bg="white">
        <Container fluid size={'xl'} p={'md'}>
          <Group>
            <Box flex={1}>
              <Text>{summary?.address?.address ?? 'No address'}</Text>
              <Title order={3}>{summary?.outletName}</Title>
            </Box>
            <Box>
              <Group>
                <Button
                  variant="default"
                  onClick={() => {
                    if (summary) {
                      editOutlet(summary);
                    }
                  }}
                >
                  Edit
                </Button>
                <Menu>
                  <Menu.Target>
                    <ActionIcon variant="default" size={'lg'}>
                      <MoreVerticalIcon />
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item onClick={()=>{
                      if(summary){
                        closeOutletTemporarily(summary)
                      }
                    }}>Close</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Group>
            </Box>
          </Group>
        </Container>
        <Tabs.List>
          <Tabs.Tab value="details">Outlet Details</Tabs.Tab>
          <Tabs.Tab value="availability">Availability</Tabs.Tab>
          <Tabs.Tab value="ratings">Ratings & Reviews</Tabs.Tab>
        </Tabs.List>
      </Box>

      {summary && (
        <Container fluid mt={'md'}>
          <Tabs.Panel value="details">
            <OutletDetails outletSummary={summary} />
          </Tabs.Panel>
          <Tabs.Panel value="availability">
            <OutletAvailability outletSummary={summary} />
          </Tabs.Panel>
          <Tabs.Panel value="ratings">
            <OutletRatings outletSummary={summary} />
          </Tabs.Panel>
        </Container>
      )}
    </Tabs>
  );
}
