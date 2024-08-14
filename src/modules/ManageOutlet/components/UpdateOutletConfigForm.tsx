import { Outlet, UpdateOutletDTO } from '@/sdk/vendor';
import { Box, Button, Group, NumberInput, Stack, Switch, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useQuery } from '@tanstack/react-query';
import { dataTypesApi } from '@/config/sdk';
import Card from '@/ui/TUI/Components/Card';
import useUpdateOutletMutation from '../hooks/useUpdateOutletMutation';
import { showNotification } from '@mantine/notifications';
import { ReactNode } from 'react';
import { DefaultDaysofWork } from '@/utils';

export default function UpdateOutletConfigForm({ initial }: { initial: Outlet }) {
  const { isPending, mutate } = useUpdateOutletMutation();
  useQuery({
    queryKey: ['market-types'],
    queryFn: async () => {
      return await dataTypesApi.miscellaneousControllerGetMarketTypes();
    },
  });
  const form = useForm<UpdateOutletDTO>({
    initialValues: {
      ...initial,
      config: {
        ...initial.config,
        daysOfWork: initial.config?.daysOfWork?? DefaultDaysofWork,
        minimumDeliveryWindow: initial.config?.minimumDeliveryWindow??0
      }
    },
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        mutate(
          { outletId: initial.id, payload: values },
          {
            onSuccess: () => {
              showNotification({ message: 'Updated successfully...' });
            },
          }
        );
      })}
    >
      <Card
        title="Configuration"
        right={
          <Button variant="default" type="submit" loading={isPending}>
            Save changes
          </Button>
        }
      >
        <Stack>
          <ListItem
            title="Order notifications"
            caption="receive alerts for new orderes"
            right={
              <Switch
                color="green"
                size="lg"
                {...form.getInputProps('config.enableOrderNotifications')}
              />
            }
          />

          <ListItem
            title="Auto accept orders"
            caption="Automatically accept orders"
            right={
              <Switch color="green" size="lg" {...form.getInputProps('config.autoAcceptOrders')} />
            }
          />

          <ListItem
            title="Max concurrent orders"
            caption="Set max orders you can handle"
            right={
              <Group>
                <NumberInput
                  style={{ width: 100 }}
                  {...form.getInputProps('config.maxConcurrentOrders')}
                />
              </Group>
            }
          />

          <ListItem
            title="Minimum delivery window"
            caption="SSpecify shortest delivery time"
            right={
              <Group>
                <NumberInput
                  min={10}
                  max={120}
                  suffix="Mins"
                  style={{ width: 100 }}
                  {...form.getInputProps('config.minimumDeliveryWindow')}
                />
              </Group>
            }
          />

          <ListItem
            title="Minimum preparation time"
            caption="Specify  minimum preparation time"
            right={
              <Group>
                <TextInput
            
                  style={{ width: 100 }}
                  {...form.getInputProps('config.defaultPreparationTime')}
                />
              </Group>
            }
          />

          <ListItem
            title="Allow pickup"
            caption="Enable customer pickup"
            right={
              <Switch
                color="green"
                size="lg"
                {...form.getInputProps('config.allowPickupAtOutlet')}
              />
            }
          />

          <ListItem
            title="Cash on delivery"
            caption="Allow cash payment on delivery"
            right={
              <Switch
                color="green"
                size="lg"
                {...form.getInputProps('config.allowCashOnDelivery')}
              />
            }
          />
        </Stack>
      </Card>
    </form>
  );
}

function ListItem({
  caption,
  title,
  right,
}: {
  title: string;
  caption: string;
  right?: ReactNode;
}) {
  return (
    <Group>
      <Box flex={1}>
        <Text fw={'bold'} tt="capitalize">
          {title}
        </Text>
        <Text>{caption}</Text>
      </Box>
      {right}
    </Group>
  );
}
