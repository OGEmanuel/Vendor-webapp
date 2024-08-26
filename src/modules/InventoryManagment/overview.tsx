import MoreIcon from '@/ui/assets/illustrations/svg-jsx.tsx/MoreIcon';
import { Box, Button, Flex, Group, Input, Paper, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { Search01Icon } from 'hugeicons-react';
import { Image } from '@mantine/core';
import sample from '@/ui/assets/foodsample.png';
import { ReactNode } from 'react';

const Overview = () => {
  const { hovered, ref } = useHover();

  return (
    <Box>
      <Paper bd={'1px solid #ECECEC'} mt={40} radius={'8px 8px 0px 0px'} px={16} py={12}>
        <Group justify="space-between">
          <Input leftSection={<Search01Icon size={'20px'} />} width={360} placeholder={'Search'} />
          <Button bg={'#FFFFFF'} c={'#3C3C3D'} bd={'1px solid #ECECEC'} fw={500}>
            Rearrange
          </Button>
        </Group>
      </Paper>
      <Box
        bd={'1px solid #ECECEC'}
        p={16}
        style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
      >
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
              <Items />
            </Paper>
            <Paper bd={'1px solid #ECECEC'} radius={16}>
              <Items />
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;

const ItemsTable = ({ title, children }: { title: string; children?: ReactNode }) => {
  const { hovered, ref } = useHover();

  return (
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
          <Button c={'#3C3C3D'} bg={'#F5F5F6'} fw={500}>
            Hide items
          </Button>
          <Paper bd={'1px solid #ECECEC'} p={6}>
            <Flex h={'100%'} justify={'center'} align={'center'}>
              <MoreIcon />
            </Flex>
          </Paper>
        </Group>
      </Group>
      {children}
    </Paper>
  );
};

const Items = () => {
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
        borderTop: '1px solid #ECECEC',
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
        <Paper bd={'1px solid #ECECEC'} p={6}>
          <Flex h={'100%'} justify={'center'} align={'center'}>
            <MoreIcon />
          </Flex>
        </Paper>
      </Group>
    </Group>
  ));
};
