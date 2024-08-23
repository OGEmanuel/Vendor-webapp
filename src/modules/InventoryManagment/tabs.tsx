import { Box, Tabs } from '@mantine/core';
import { useNavigate, useSearchParams } from 'react-router-dom';
// import useGetOutletQuery from '../ManageOutlet/hooks/useGetOutlet';

export default function InventoryTabs() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  //   const { data: summary } = useGetOutletQuery();

  return (
    <Tabs
      defaultValue={params.get('tabId') ?? 'overview'}
      color="dark"
      onChange={(value) => navigate(`?tabId=${value}`)}
    >
      <Box bg="white">
        <Tabs.List>
          <Tabs.Tab value="overview">Overview</Tabs.Tab>
          <Tabs.Tab value="categories">Categories</Tabs.Tab>
          <Tabs.Tab value="items">Items</Tabs.Tab>
          <Tabs.Tab value="options">Options</Tabs.Tab>
        </Tabs.List>
      </Box>

      {/* {summary && ( */}
      {/* <Container fluid mt={'md'}> */}
      {/* <Tabs.Panel value="overview">
          <Overview />
        </Tabs.Panel> */}
      {/* <Tabs.Panel value="categories">
            <Categories />
          </Tabs.Panel>
          <Tabs.Panel value="items">
            <Items />
          </Tabs.Panel>
          <Tabs.Panel value="options">
            <Options />
          </Tabs.Panel> */}
      {/* </Container> */}
      {/* //   )} */}
    </Tabs>
  );
}
