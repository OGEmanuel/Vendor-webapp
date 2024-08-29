import WhiteMenuIcon from '@/ui/assets/illustrations/svg-jsx/WhiteMenuIcon';
import {
  Button,
  Flex,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Paper,
  Text,
} from '@mantine/core';
import { ArrowDown01Icon, Store01Icon } from 'hugeicons-react';

const Right = () => {
  return (
    <Group>
      <Menu width={320}>
        <Paper bd={'1px solid #ECECEC'} radius={8}>
          <Flex>
            <Flex gap={8} py={8} px={16} style={{ borderRight: '1px solid #ECECEC' }}>
              <Store01Icon />
              <Text c={'#3C3C3D'} fw={500}>
                Outlet
              </Text>
            </Flex>
            <MenuTarget>
              <Flex gap={8} py={8} px={16} style={{ cursor: 'pointer' }}>
                <Text c={'#111113'} fw={500}>
                  Abolaji Cuisine Obga
                </Text>
                <ArrowDown01Icon />
              </Flex>
            </MenuTarget>
          </Flex>
        </Paper>
        <MenuDropdown
          p={4}
          flex={1}
          style={{
            boxShadow: '0px 4px 8px 0px #3C3C3D0D',
          }}
        >
          <Flex direction="column" gap={8}>
            <MenuItem p={8}>
              <Text c={'#111113'} fw={500}>
                Abolaji Cuisine Obga
              </Text>
              <Text c={'#B5B5B6'} size={'14px'} lineClamp={1}>
                Classic Nigerian rice dish cooked in a tomato base
              </Text>
            </MenuItem>
            <MenuItem p={8}>
              <Text c={'#111113'} fw={500}>
                Abolaji Cuisine Obga
              </Text>
              <Text c={'#B5B5B6'} size={'14px'} lineClamp={1}>
                Classic Nigerian rice dish cooked in a tomato base
              </Text>
            </MenuItem>
          </Flex>
        </MenuDropdown>
      </Menu>
      <Menu shadow="md" width={140}>
        <MenuTarget>
          <Button rightSection={<WhiteMenuIcon />} size="md" radius={8}>
            Add
          </Button>
        </MenuTarget>
        <MenuDropdown>
          <MenuItem>Add category</MenuItem>
          <MenuItem>Add item</MenuItem>
          <MenuItem>Add options</MenuItem>
        </MenuDropdown>
      </Menu>
    </Group>
  );
};

export default Right;
