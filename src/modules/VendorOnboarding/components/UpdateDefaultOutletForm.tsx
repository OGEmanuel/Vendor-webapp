import { DaysOfWork, OpeningHours, Outlet, OutletConfig, UpdateOutletDTO } from '@/sdk/vendor';
import OpeningHoursInput from '@/ui/TUI/Components/OpeningHourInput';
import {
  Button,
  Grid,
  Group,
  MultiSelect,
  Paper,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { Store02Icon } from 'hugeicons-react';
import { useContext } from 'react';
import { OnboardingContext } from '../pages/VendorOnboarding';
import { TUIBackButtonActionIcon } from '@/ui/TUI/Components/BackButton';
import { useQuery } from '@tanstack/react-query';
import { dataTypesApi } from '@/config/sdk';
import useUpdateDefaultOutletMutation from '../hooks/useUpdateOutletMutation';
import { DefaultDaysofWork } from '@/utils';

type Days = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
export default function UpdateDefaultOutletForm({ initial }: { initial: Outlet }) {
  const { back } = useContext(OnboardingContext);
  const { isPending, mutate } = useUpdateDefaultOutletMutation();
  const { data: marketTypes } = useQuery({
    queryKey: ['market-types'],
    queryFn: async () => {
      return await dataTypesApi.miscellaneousControllerGetMarketTypes();
    },
  });
  const theme = useMantineTheme();
  const form = useForm<UpdateOutletDTO>({
    //@ts-ignore
    initialValues: {
      ...initial,
      address: initial.address ?? {
        address: '',
        city: '',
        country: '',
        countryCode: 'NG',
        latitude: 0,
        longitude: 0,
        state: '',
        stateCode: '',
        notes: '',
      },
      config: {
        ...initial.config,
        daysOfWork: initial.config?.daysOfWork ?? DefaultDaysofWork,
        minimumDeliveryWindow: initial.config?.minimumDeliveryWindow ?? 0,
      },
    },
  });

  function SetOpeninHour({ day }: { day: Days }) {
    return (
      <OpeningHoursInput
        day={day}
        payload={form.values.config?.daysOfWork[day] as OpeningHours}
        onChange={(payload) => {
          const config = { ...form.values.config } as OutletConfig;
          const daysOfWork = config.daysOfWork as DaysOfWork;
          daysOfWork[day] = payload;
          config.daysOfWork = daysOfWork;
          form.setFieldValue('config', config);
        }}
      />
    );
  }

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        mutate({ outletId: initial.id, payload: values }, { onSuccess: () => {} });
      })}
    >
      <Grid>
        <Grid.Col span={{ md: 12 }}>
          <Stack>
            <Paper p="md" bg={theme.colors.gray[1]}>
              <Store02Icon />
              <Text fw={'bold'}>What is an Outlet</Text>
              <Text size="sm">
                An outlet is a specific location of your business that operates in a designated
                zone. You can create multiple outlets for different market types such as
                restaurants, groceries, pharmacies, or local markets.
              </Text>
            </Paper>
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ md: 12 }}>
          <TextInput label={'Outlet name'} {...form.getInputProps('outletName')} />
        </Grid.Col>

        <Grid.Col span={{ md: 12 }}>
          <MultiSelect
            color="dark"
            label={'Market Type'}
            {...form.getInputProps('marketSegments')}
            data={marketTypes?.data.map((_) => {
              return { label: _.displayName, value: _.handle };
            })}
          />
        </Grid.Col>

        <Grid.Col span={{ md: 12 }}>
          <Stack>
            <SetOpeninHour day="monday" />
            <SetOpeninHour day="tuesday" />
            <SetOpeninHour day="wednesday" />
            <SetOpeninHour day="thursday" />
            <SetOpeninHour day="friday" />
            <SetOpeninHour day="saturday" />
            <SetOpeninHour day="sunday" />
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ md: 12 }}>
          <Group>
            <TUIBackButtonActionIcon
              onClick={() => {
                back();
              }}
            />
            <Button
              disabled={form.isValid() == true ? false : true}
              flex={1}
              fullWidth
              type="submit"
              loading={isPending}
            >
              Continue
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </form>
  );
}
