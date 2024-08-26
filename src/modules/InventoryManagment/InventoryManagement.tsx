import TUIPageShell from '@/ui/TUI/Templates/TUIPageShell';
import Right from './right';
import { Flex, Group, Text } from '@mantine/core';
import EmptyInventoryIcon from '@/ui/assets/illustrations/svg-jsx.tsx/EmptyInventoryIcon';
import InventoryTabs from './tabs';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Overview from './overview';
import Categories from './categories';
import Items from './items';
import Options from './options';
import { useEffect } from 'react';

export default function InventoryManagement() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const overview = params.get('tabId') === 'overview';
  const categories = params.get('tabId') === 'categories';
  const items = params.get('tabId') === 'items';
  const options = params.get('tabId') === 'options';

  useEffect(() => {
    navigate(`?tabId=overview`);
  }, []);
  // console.log(params.get('tabId') ?? 'overview');

  return (
    <TUIPageShell
      title="Inventory"
      caption="Track and update your items to ensure customers see what’s in stock"
      right={<Right />}
      tabs={<InventoryTabs />}
    >
      {overview && <Overview />}
      {categories && <Categories />}
      {items && <Items />}
      {options && <Options />}
      <Flex align={'center'} justify={'center'} style={{ height: 'calc(100vh - 147.58px)' }}>
        <Group
          style={{
            display: 'flex',
            gap: 16,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
          w={405}
        >
          <EmptyInventoryIcon />
          <Flex gap={8} direction="column" align="center" justify="center">
            <Text c={'#111113'} fw={700}>
              No Inventory yet
            </Text>
            <Text c={'#7E7E80'} ta={'center'}>
              Start adding categories and items to make your outlet visible to customers.
            </Text>
          </Flex>
        </Group>
      </Flex>
    </TUIPageShell>
  );
}
