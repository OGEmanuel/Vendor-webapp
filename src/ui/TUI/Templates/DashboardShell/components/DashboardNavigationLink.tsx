import { Group, Paper, Text, useMantineTheme } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { HugeiconsProps } from 'hugeicons-react';

export default function DashboardNavigationLink({
  Icon,
  label,
  rightIcon,
  path,
}: {
  Icon: React.FC<HugeiconsProps>;
  label: string;
  rightIcon?: React.ReactNode;
  path: string;
}) {
  const theme = useMantineTheme();
  return (
    <NavLink to={path} style={{ color: 'inherit', textDecoration: 'none' }}>
      {(props) => {
        return (
          <Paper
            bg={props.isActive ? theme.colors.gray[1] : undefined}
            radius={'lg'}
            py="xs"
            px={'xs'}
          >
            <Group>
              <Icon />
              <Text flex={1} fw={props.isActive == true ? 'bold' : undefined}>
                {label}
              </Text>
              {rightIcon}
            </Group>
          </Paper>
        );
      }}
    </NavLink>
  );
}
