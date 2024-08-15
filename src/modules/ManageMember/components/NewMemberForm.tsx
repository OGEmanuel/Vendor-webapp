import { InviteMemberDTO, MemberRoleEnum } from '@/sdk/vendor';
import { Button, Grid, Select, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import useNewMemberMutation from '../hooks/useNewMemberMutation';
import PhoneInput from '@/ui/TUI/Components/PhoneInput';
import useGetVendorOutletsQuery from '@/modules/Management/hooks/useGetVendorOutlets';

export default function NewMemberForm({ onComplete }: { onComplete: () => void }) {
  const { isPending, mutate } = useNewMemberMutation();

  const { data: outlets } = useGetVendorOutletsQuery();
  const form = useForm<InviteMemberDTO>({
    initialValues: {
      accountId: '',
      email: '',
      firstName: '',
      lastName: '',
      phone: '',
      vendorId: '',
      name: '',
      outletId: '',
      status: 'enabled',
      role: 'admin',
    },
    validate: {
      email: (value) => (/^\S+@\S+\.\S+$/.test(value) ? null : 'Invalid email address'),
      firstName: (value) => (value.trim().length > 0 ? null : 'First name is required'),
      lastName: (value) => (value.trim().length > 0 ? null : 'Last name is required'),
      phone: (value) => (/^\+[1-9]{1,3}[0-9]{10,14}$/.test(value) ? null : 'Invalid phone number'),
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
      <Text c={'dimmed'}>Add member and assign a role</Text>
      <Grid>
        <Grid.Col span={{ md: 6 }}>
          <TextInput label={'First name'} {...form.getInputProps('firstName')} />
        </Grid.Col>

        <Grid.Col span={{ md: 6 }}>
          <TextInput label={'Last name'} {...form.getInputProps('lastName')} />
        </Grid.Col>

        <Grid.Col span={{ md: 12 }}>
          <TextInput label={'Email'} {...form.getInputProps('email')} />
        </Grid.Col>

        <Grid.Col span={{ md: 12 }}>
          <PhoneInput label={'Phone number'} {...form.getInputProps('phone')} />
        </Grid.Col>

        <Grid.Col span={{ md: 12 }}>
          <Select
            label={'Role'}
            {...form.getInputProps('role')}
            data={[
              { label: 'Super admin', value: MemberRoleEnum.SuperAdmin, disabled: true },
              { label: 'Admin', value: MemberRoleEnum.Admin },
              { label: 'Manager', value: MemberRoleEnum.Manager },
            ]}
          />
        </Grid.Col>

        <Grid.Col span={{ md: 12 }}>
          <Select
            label={'Select an outlet'}
            {...form.getInputProps('outletId')}
            data={outlets?.map((e) => {
              return { label: e.outletName, value: e.id };
            })}
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
            Send invite
          </Button>
        </Grid.Col>
      </Grid>
    </form>
  );
}
