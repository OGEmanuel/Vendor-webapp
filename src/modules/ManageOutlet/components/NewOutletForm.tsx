import { CreateOutletDTO } from '@/sdk/vendor';
import { Button, Grid, Select, Text, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useQuery } from '@tanstack/react-query';
import { dataTypesApi } from '@/config/sdk';
import { showNotification } from '@mantine/notifications';
import AddressEditorFormExtension from '@/ui/TUI/Components/AddressEditorFormExtension';
import { DefaultDaysofWork } from '@/utils';
import useNewOutletMutation from '../hooks/useNewOutletMutation';

export default function NewOutletForm({ onComplete }: { onComplete: () => void }) {
  const { isPending, mutate } = useNewOutletMutation();
  const { data: marketTypes } = useQuery({
    queryKey: ['market-types'],
    queryFn: async () => {
      return await dataTypesApi.miscellaneousControllerGetMarketTypes();
    },
  });
  const form = useForm<CreateOutletDTO>({
    initialValues: {
      marketSegments: [],
      primaryMarketSegment: '',
      caption: '',
      config: {
        daysOfWork: DefaultDaysofWork,
        minimumDeliveryWindow: 60,
      },
      outletName: '',
      vendorId: '',
      address: {
        address: '',
        city: '',
        country: 'Nigeria',
        countryCode: 'NG',
        latitude: 0,
        longitude: 0,
        state: '',
        stateCode: '',
        notes: '',
      },
    },
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        mutate(
          { payload: values },
          {
            onSuccess: () => {
              onComplete();
              showNotification({ message: 'Updated successfully...' });
            },
          }
        );
      })}
    >
      <Text c={'dimmed'}>Setup a new outlet</Text>
      <Grid>
        <Grid.Col span={{ md: 12 }}>
          <TextInput label={'Outlet name'} {...form.getInputProps('outletName')} />
        </Grid.Col>

        <Grid.Col span={{ md: 12 }}>
          <Textarea label={'Caption'} {...form.getInputProps('caption')} />
        </Grid.Col>

        <Grid.Col span={{ md: 12 }}>
          <Select
            label={'Market Type'}
            {...form.getInputProps('primaryMarketSegment')}
            data={marketTypes?.data.map((_) => {
              return { label: _.displayName, value: _.handle };
            })}
          />
        </Grid.Col>

        <Grid.Col span={{ md: 12 }}>
          <AddressEditorFormExtension
            address={form.values.address}
            onChange={(address) => {
              form.setFieldValue('address', address);
            }}
          />
        </Grid.Col>

        <Grid.Col span={{ md: 12 }}>
          <Button
            disabled={form.isValid() == true ? false : true}
            flex={1}
            fullWidth
            type="submit"
            loading={isPending}
          >
            Create outlet
          </Button>
        </Grid.Col>
      </Grid>
    </form>
  );
}
