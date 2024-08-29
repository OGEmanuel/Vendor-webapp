import EmptyCategoriesIcon from '@/ui/assets/illustrations/svg-jsx/EmptyCategoriesIcon';
import EmptyState from './EmptyState';
import {
  Box,
  Button,
  Checkbox,
  Drawer,
  Flex,
  Group,
  Image,
  Input,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  Paper,
  rem,
  Switch,
  Text,
  TextInput,
} from '@mantine/core';
import TableHeader from './TableHeader';
import { ArrowDown01Icon, PlusSignIcon, Search01Icon } from 'hugeicons-react';
import TableBody from './TableBody';
import MoreIcon from '@/ui/assets/illustrations/svg-jsx/MoreIcon';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import sample from '@/ui/assets/foodsample.png';
import CheckedStateIcon from '@/ui/assets/illustrations/svg-jsx/CheckedStateIcon';
import EditIcon from '@/ui/assets/illustrations/svg-jsx/EditIcon';
import DeleteIcon from '@/ui/assets/illustrations/svg-jsx/DeleteIcon';

const Categories = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const data = [];
  const smallData = [];

  for (let i = 0; i < 6; i++) {
    data.push({
      id: i,
      name: 'Mega chows',
    });
  }

  for (let i = 0; i < 6; i++) {
    smallData.push({
      id: i,
      name: 'Mega chows',
    });
  }
  return data.length > 0 ? (
    <Box>
      <AddCategory opened={opened} close={close} />
      <TableHeader>
        <Button leftSection={<PlusSignIcon size={20} />} onClick={() => open()}>
          Category
        </Button>
      </TableHeader>
      <TableBody borderRadius={'0px 0px 16px 16px'}>
        <Group gap={0} py={16} px={16}>
          <Text w={320} c={'#7E7E80'}>
            Name
          </Text>
          <Text c={'#7E7E80'}>Items</Text>
        </Group>
        {smallData.length > 0 ? (
          <>
            <Box>
              {data.map((item) => (
                <Item key={item.id} category={item.name} open={open} />
              ))}
            </Box>
            <Group
              p={16}
              bg={'#FFFFFF'}
              style={{ borderRadius: '0 0 16px 16px' }}
              justify="space-between"
            >
              <Text c={'#3C3C3D'} size={'14px'}>
                Page 1 of 1
              </Text>
              <Group gap={12}>
                <Button bd={'1px solid #ECECEC'} c={'#3C3C3D'} bg={'#FFFFFF'} size="sm">
                  <Text size="14px">Previous</Text>
                </Button>
                <Button bd={'1px solid #ECECEC'} c={'#3C3C3D'} bg={'#FFFFFF'} size="sm">
                  <Text size="14px">Next</Text>
                </Button>
              </Group>
            </Group>
          </>
        ) : (
          <Paper radius={'0px 0px 16px 16px'} style={{ borderTop: '1px solid #ECECEC' }}>
            <EmptyState
              emptyIcon={<EmptyCategoriesIcon />}
              emptyText={'Not found'}
              emptySubText={
                'Nothing matches your search. Try a different term or check your spelling.'
              }
            />
          </Paper>
        )}
      </TableBody>
    </Box>
  ) : (
    <EmptyState
      emptyIcon={<EmptyCategoriesIcon />}
      emptyText={'No Categories yet'}
      emptySubText={'Start by creating categories to organize your inventory.'}
      button={<Button>Create category</Button>}
    />
  );
};

export default Categories;

const Item = ({ category, open }: { category: string; open: () => void }) => {
  return (
    <Flex
      bg={'#FFFFFF'}
      align={'center'}
      w={'100%'}
      style={{ borderTop: '1px solid #ECECEC', borderBottom: '1px solid #ECECEC' }}
    >
      <Text py={32} pl={16} w={320} fw={500} c={'#111113'}>
        {category}
      </Text>
      <Group align={'center'} justify="space-between" style={{ width: 'calc(100% - 320px)' }}>
        <Text py={32} pl={16}>
          3 items
        </Text>
        <Flex gap={10} align={'center'} py={24} px={24}>
          <Button
            bd={'1px solid #ECECEC'}
            c={'#3C3C3D'}
            bg={'#FFFFFF'}
            size="md"
            onClick={() => open()}
          >
            Add item
          </Button>
          <Menu>
            <MenuTarget>
              <Paper bd={'1px solid #ECECEC'} p={8} radius={8}>
                <Flex h={'100%'} justify={'center'} align={'center'}>
                  <MoreIcon />
                </Flex>
              </Paper>
            </MenuTarget>
            <MenuDropdown
              p={4}
              style={{ display: 'flex', flexDirection: 'column', gap: 4, borderRadius: '8px' }}
            >
              <MenuItem leftSection={<EditIcon />} p={8}>
                Edit
              </MenuItem>
              <MenuItem
                leftSection={<DeleteIcon />}
                p={8}
                c={'#DC2626'}
                style={{ borderRadius: '4px' }}
                bg={'#FEE2E2'}
              >
                Delete category
              </MenuItem>
            </MenuDropdown>
          </Menu>
        </Flex>
      </Group>
    </Flex>
  );
};

const AddCategory = ({ opened, close }: { opened: boolean; close: () => void }) => {
  const data = [];

  for (let i = 0; i < 10; i++) {
    data.push({
      id: i,
      name: 'Smoked Suya Jollof rice',
      description: 'Classic Nigerian rice dish cooked in a tomato base',
      image: sample,
    });
  }
  const [inputValue, setInputValue] = useState('');
  const [menuOpened, setMenuOpened] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setInputValue(newValue);
    setMenuOpened(newValue !== '');
  };

  const tags = [
    { id: 1, name: 'Main menu' },
    { id: 2, name: 'Combos' },
    { id: 3, name: 'Packages' },
    { id: 4, name: 'Proteins' },
    { id: 5, name: 'Drinks' },
    { id: 6, name: 'Sides' },
  ];

  return (
    <Drawer
      size={480}
      opened={opened}
      onClose={close}
      title="Add new category"
      position="right"
      styles={{
        title: {
          fontWeight: 700,
          fontSize: '20px',
          color: '#111113',
          paddingLeft: '8px',
          paddingRight: '8px',
        },
        body: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: 'calc(100% - 60px)',
          padding: '0px',
        },
      }}
    >
      <Flex direction={'column'} gap={24} px={24}>
        <Text c={'#7E7E80'}>Create a new category for better item organization.</Text>
        <Flex gap={16} direction={'column'}>
          <TextInput placeholder="e.g Main menu" label="Category name" />
          <Group gap={8} style={{ borderBottom: '1px dashed #ECECEC', paddingBottom: 24 }}>
            {tags.map((tag) => (
              <Text
                key={tag.id}
                size="14px"
                c={'#7E7E80'}
                bg={'#FAFAFA'}
                bd={'1px solid #ECECEC'}
                p={8}
                style={{ borderRadius: '8px' }}
              >
                {tag.name}
              </Text>
            ))}
          </Group>
          <Flex direction={'column'} gap={8}>
            <Switch
              checked={checked}
              onChange={(event) => setChecked(event.currentTarget.checked)}
              labelPosition="left"
              color="#16A34A"
              label={
                <Flex justify="space-between" align="center" style={{ width: '100%' }}>
                  <Box>
                    <Text size="sm" fw={500} lh={'24px'}>
                      Add items
                    </Text>
                    <Text size="14px" c="#7E7E80" lh={'20px'}>
                      Choose the items you want to include in this category.
                    </Text>
                  </Box>
                </Flex>
              }
              styles={(theme) => ({
                body: {
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
                label: {
                  marginRight: theme.spacing.md,
                },
              })}
            />
            <Flex direction={'column'} gap={8}>
              <Input
                size="md"
                placeholder="Select item"
                leftSection={<Search01Icon size={'20px'} />}
                rightSection={menuOpened ? <ArrowDown01Icon /> : null}
                pointer
                mt="md"
                value={inputValue}
                onChange={handleInputChange}
              />
              {menuOpened && (
                <Paper
                  radius={8}
                  p={4}
                  bd={'1px solid #ECECEC'}
                  style={{
                    boxShadow: '0px 4px 8px 0px #3C3C3D0D',
                    height: '360px',
                    overflow: 'auto',
                  }}
                >
                  {data.length > 0 ? (
                    data.map((item) => (
                      <DropDownContent
                        key={item.id}
                        image={item.image}
                        title={item.name}
                        description={item.description}
                      />
                    ))
                  ) : (
                    <DropDownEmpty />
                  )}
                </Paper>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Box p={24} style={{ borderTop: '1px solid #ECECEC' }}>
        <Button fullWidth size="md" radius={16} bg={checked ? '#F97316' : '#FED7AA'}>
          Add category
        </Button>
      </Box>
    </Drawer>
  );
};

const DropDownEmpty = () => {
  return (
    <Group gap={8} bg={'#FAFAFA'} p={8} style={{ borderRadius: '4px' }}>
      <Paper
        bg={'#FFFFFF'}
        p={8}
        radius={8}
        h={40}
        w={40}
        style={{ border: '1px solid #ECECEC' }}
      ></Paper>
      <Flex direction={'column'}>
        <Text lh={'24px'} fw={500} c={'#111113'}>
          No item available
        </Text>
        <Text lh={'20px'} size="14px" c={'#B5B5B6'}>
          Create an item and add to category
        </Text>
      </Flex>
    </Group>
  );
};

const DropDownContent = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <Paper>
      <Checkbox
        labelPosition="left"
        p={8}
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        icon={({ className }) => (
          <CheckedStateIcon className={className} style={{ width: rem(8), height: rem(8) }} />
        )}
        label={
          <Flex gap={8}>
            <Box w={40} h={40} style={{ overflow: 'hidden' }}>
              <Paper radius={8} w={40} h={40}>
                <Image
                  src={image}
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
                {title}
              </Text>
              <Text c={'#B5B5B6'} size="14px">
                {description}
              </Text>
            </Box>
          </Flex>
        }
        styles={() => ({
          input: {
            backgroundColor: checked ? '#DCFCE7' : '#FFFFFF',
            border: checked ? '1px solid #22C55E' : '1px solid #ECECEC',
            borderRadius: '50%',
          },
          icon: {
            color: 'darkgreen',
          },
          body: {
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        })}
      />
    </Paper>
  );
};
