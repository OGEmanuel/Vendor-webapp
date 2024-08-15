import { Member, MemberRoleEnum, MemberStatusEnum, UpdateMemberDTO } from '@/sdk/vendor';
import { Button, Grid, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import useUpdateMemberMutation from '../hooks/useUpdateMemberMutation';
import useGetVendorOutletsQuery from '@/modules/Management/hooks/useGetVendorOutlets';

export default function UpdateMemberForm({
  initial,
  onComplete,
}: {
  initial: Member;
  onComplete: () => void;
}) {
  const { isPending, mutate } = useUpdateMemberMutation();

  const { data: outlets } = useGetVendorOutletsQuery();

  const form = useForm<UpdateMemberDTO>({
    initialValues: {
      ...initial,
    },
  });
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        mutate(
          { payload: values, memberId: initial.id },
          {
            onSuccess: () => {
              onComplete();
              showNotification({ message: 'Updated successfully...' });
            },
          }
        );
      })}
    >
      <Grid>
        <Grid.Col span={{ md: 6 }}>
          <TextInput label={'Fullname'} {...form.getInputProps('name')} />
        </Grid.Col>

        <Grid.Col span={{ md: 6 }}>
          <Select
            label={'Status'}
            {...form.getInputProps('status')}
            data={[
              { label: 'Enabled', value: MemberStatusEnum.Enabled },
              { label: 'Disabled', value: MemberStatusEnum.Disabled },
            ]}
          />
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
            Update Details
          </Button>
        </Grid.Col>
      </Grid>
    </form>
  );
}
