import { Avatar, Divider, Stack, Text, useMantineTheme } from '@mantine/core';
import {
  ShoppingBasket01Icon,
  Invoice02Icon,
  UserListIcon,
  Store01Icon,
  Home02Icon,
  TagsIcon,
  Time02Icon,
  StarIcon,
} from 'hugeicons-react';
import VendorSwitcher from '@/ui/components/dashboard-widgets/VendorSwitcher';
import useActiveVendor from '@/hooks/useActiveVendor';
import React, { useEffect } from 'react';
import DashboardNavigationLink from './DashboardNavigationLink';
import { useMediaQuery } from '@mantine/hooks';
export default function TUIDashboardSideNavigation() {
  const mantine = useMantineTheme();
  const { reloadVendorSummary } = useActiveVendor();
  useEffect(() => {
    reloadVendorSummary();
  }, []);
  return (
    <React.Fragment>
      <VendorSwitcher />
      <Divider />
      <Stack p="md" gap={0}>
        <Text size="sm" c={'dimmed'} mb="sm">
          OPERATIONS
        </Text>
        <DashboardNavigationLink
          Icon={ShoppingBasket01Icon}
          label="Orders"
          path="/orders"
          rightIcon={<Avatar size={'xs'}>0</Avatar>}
        />
        <DashboardNavigationLink Icon={Home02Icon} label="Dashboard" path="/home" />
        <DashboardNavigationLink Icon={TagsIcon} label="Inventory" path="/inventory" />
        <DashboardNavigationLink Icon={Time02Icon} label="Availability" path="/availability" />
        <DashboardNavigationLink Icon={StarIcon} label="Ratings & Reviews" path="ratings-reviews" />

        <Text size="sm" c={'dimmed'} mt={'xl'} mb="sm">
          MANAGEMENT
        </Text>
        <DashboardNavigationLink Icon={Store01Icon} label="Outlets" path="/management/outlets" />
        <DashboardNavigationLink Icon={UserListIcon} label="Members" path="/management/members" />
        <DashboardNavigationLink
          Icon={Invoice02Icon}
          label="Payouts & Invoices"
          path="/management/payouts"
        />
      </Stack>
    </React.Fragment>
  );
}
