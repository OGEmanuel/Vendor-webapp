import { Outlet, UpdateOutletDTO } from '@/sdk/vendor';
import { Button, Grid, Select, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useQuery } from '@tanstack/react-query';
import { dataTypesApi } from '@/config/sdk';
import { showNotification } from '@mantine/notifications';
import useUpdateOutletMutation from '../hooks/useUpdateOutletMutation';
import AddressEditorFormExtension from '@/ui/TUI/Components/AddressEditorFormExtension';

export default function UpdateOutletDetailsForm({ initial }: { initial: Outlet }) {
  const { isPending, mutate } = useUpdateOutletMutation();
  const { data: marketTypes } = useQuery({
    queryKey: ['market-types'],
    queryFn: async () => {
      return await dataTypesApi.miscellaneousControllerGetMarketTypes();
    },
  });
  const form = useForm<UpdateOutletDTO>({
    initialValues: {
      ...initial,
    },
  });
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        mutate(
          { outletId: initial.id, payload: values },
          { onSuccess: () => showNotification({ message: 'Updated successfully...' }) }
        );
      })}
    >
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
            address={
              form.values.address 
            }
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
            Continue
          </Button>
        </Grid.Col>
      </Grid>
    </form>
  );
}
