import MoreIcon from '@/ui/assets/illustrations/svg-jsx/MoreIcon';
import { Accordion, Box, Button, Flex, Group, Paper, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { Image } from '@mantine/core';
import sample from '@/ui/assets/foodsample.png';
import { ReactNode } from 'react';
import { useState } from 'react';
import EmptyInventoryIcon from '@/ui/assets/illustrations/svg-jsx/EmptyInventoryIcon';
import EmptyState from './EmptyState';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Overview = () => {
  const data = [];

  for (let i = 0; i < 4; i++) {
    data.push({
      id: i,
      name: 'Smoked Suya Jollof rice',
      description: 'Classic Nigerian rice dish cooked in a tomato base',
      price: '₦ 4,500',
      stock: Math.random() > 0.5 ? true : false,
      image: sample,
    });
  }

  return data.length > 0 ? (
    <Box>
      <TableHeader>
        <Button bg={'#FFFFFF'} c={'#3C3C3D'} bd={'1px solid #ECECEC'} fw={500}>
          Rearrange
        </Button>
      </TableHeader>
      <TableBody p={16} gap={16}>
        <ItemsTable title={'Mega chows'}>
          <Items />
        </ItemsTable>
        <ItemsTable title={'Foodtrays and Platters'}>
          <Items />
        </ItemsTable>
        <ItemsTable title={'Promo packages'} />
        <Box>
          <Text c={'#7E7E80'} mb={8}>
            INACTIVE CATEGORIES
          </Text>
          <Box style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <ItemsTable title={'Combo Deals'} />
            <ItemsTable title={'9ja Meal Bundles'} />
          </Box>
        </Box>
        <Box>
          <Text c={'#7E7E80'} mb={8}>
            INACTIVE CATEGORIES
          </Text>
          <Box style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Paper bd={'1px solid #ECECEC'} radius={16}>
              <Items noBorderTop />
            </Paper>
            <Paper bd={'1px solid #ECECEC'} radius={16}>
              <Items noBorderTop />
            </Paper>
          </Box>
        </Box>
      </TableBody>
    </Box>
  ) : (
    <EmptyState
      emptyIcon={<EmptyInventoryIcon />}
      emptyText={'No Inventory yet'}
      emptySubText={'Start adding categories and items to make your outlet visible to customers.'}
    />
  );
};

export default Overview;

const ItemsTable = ({ title, children }: { title: string; children?: ReactNode }) => {
  const { hovered, ref } = useHover();
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <Accordion
      chevron={null}
      styles={{
        control: {
          padding: 0,
          width: 'fit-content',
        },
        chevron: {
          display: 'none', // Hide the chevron completely
        },
        item: {
          border: 'none',
        },
        content: {
          padding: 0,
        },
      }}
    >
      <Accordion.Item value="items">
        <Paper pt={18} bd={'1px solid #ECECEC'} radius={16}>
          <Group justify="space-between" pb={16} px={16}>
            <Group gap={8}>
              <Text fw={700} size={'20px'}>
                {title}
              </Text>
              <Paper
                fw={500}
                c={'#7E7E80'}
                py={8}
                px={16}
                bd={'1px solid #ECECEC'}
                radius={68}
                ref={ref}
                style={{ backgroundColor: hovered ? '#F2F2F2' : '#FFFFFF' }}
              >
                <Text size={'14px'}>4 items</Text>
              </Paper>
            </Group>
            <Group align="center" gap={10}>
              <Accordion.Control w={110} h={40} style={{ backgroundColor: 'transparent' }}>
                <Button
                  c={'#3C3C3D'}
                  bg={isOpen ? '#FFFFFF' : '#F5F5F6'}
                  fw={500}
                  onClick={toggleAccordion}
                  style={{
                    border: isOpen ? '1px solid #ECECEC' : 'none',
                  }}
                >
                  {isOpen ? 'View items' : 'Hide items'}
                </Button>
              </Accordion.Control>
              <Paper bd={'1px solid #ECECEC'} p={6}>
                <Flex h={'100%'} justify={'center'} align={'center'}>
                  <MoreIcon />
                </Flex>
              </Paper>
            </Group>
          </Group>
          <Accordion.Panel>{children}</Accordion.Panel>
        </Paper>
      </Accordion.Item>
    </Accordion>
  );
};

const Items = ({ noBorderTop }: { noBorderTop?: boolean }) => {
  const data = [];

  for (let i = 0; i < 4; i++) {
    data.push({
      id: i,
      name: 'Smoked Suya Jollof rice',
      description: 'Classic Nigerian rice dish cooked in a tomato base',
      price: '₦ 4,500',
      stock: Math.random() > 0.5 ? true : false,
      image: sample,
    });
  }
  return data.map((item, index) => (
    <Group
      py={20}
      px={16}
      style={{
        borderTop: noBorderTop ? 'none' : '1px solid #ECECEC',
        borderBottom: index === data.length - 1 ? 'none' : '1px solid #ECECEC',
      }}
      justify="space-between"
      key={item.id}
    >
      <Group gap={16}>
        <Box w={40} h={40} style={{ overflow: 'hidden' }}>
          <Paper radius={8} w={40} h={40}>
            <Image
              src={item.image}
              alt="food-sample"
              w={'100%'}
              h={'100%'}
              style={{ overflow: 'hidden' }}
              radius={8}
              bd={'1px solid #0000001A'}
            />
          </Paper>
        </Box>
        <Box>
          <Text fw={500} c={'#111113'}>
            {item.name}
          </Text>
          <Text c={'#7E7E80'}>{item.description}</Text>
        </Box>
      </Group>
      <Group>
        {item.stock && (
          <Paper
            bg={'#FEE2E2'}
            bd={'1px solid #EF4444'}
            fw={500}
            radius={47}
            py={8}
            px={16}
            c={'#DC2626'}
          >
            Out of stock
          </Paper>
        )}
        <Text fw={500} c={'#3C3C3D'}>
          ₦ 4,500
        </Text>
        <Paper bd={'1px solid #ECECEC'} p={6} radius={8}>
          <Flex h={'100%'} justify={'center'} align={'center'}>
            <MoreIcon />
          </Flex>
        </Paper>
      </Group>
    </Group>
  ));
};
