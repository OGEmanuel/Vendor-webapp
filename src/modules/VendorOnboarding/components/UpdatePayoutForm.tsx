import { UpdateVendorPayoutProfileDTO, Vendor } from '@/sdk/vendor';
import { TUIBackButtonActionIcon } from '@/ui/TUI/Components/BackButton';
import { Button, Grid, Group, Select, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useContext } from 'react';
import { OnboardingContext } from '../pages/VendorOnboarding';
import { useQuery } from '@tanstack/react-query';
import { banksApi } from '@/config/sdk';
import useUpdatePayoutProfileMutation from '../hooks/useUpdatePayoutProfileMutation';

export default function UpdatePayoutForm({ initial }: { initial: Vendor }) {
  const { back } = useContext(OnboardingContext);
  const { data } = useQuery({
    queryKey: ['banks'],
    queryFn: () => {
      return banksApi.miscellaneousControllerGetBanks();
    },
  });
  const { mutate } = useUpdatePayoutProfileMutation();
  const form = useForm<UpdateVendorPayoutProfileDTO>({
    initialValues: {
      payoutProfile: initial.payoutProfile ?? {
        accountName: '',
        accountNumber: '',
        bankCode: '',
        bankName: '',
      },
    },
    validate: {
      payoutProfile: {
        accountName: (value) => (value ? null : 'Account Name is required'),
        accountNumber: (value) =>
          value
            ? /^\d+$/.test(value)
              ? null
              : 'Account Number must be numeric'
            : 'Account Number is required',
        bankCode: (value) => (value ? null : 'Bank Code is required'),
        bankName: (value) => (value ? null : 'Bank Name is required'),
      },
    },
  });
  
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        mutate({ vendorId: initial.id, payload: values }, { onSuccess: () => {} });
      })}
    >
      <Grid>
        <Grid.Col span={{ md: 12 }}>
          <Stack>
            <TextInput
              label="Account number"
              {...form.getInputProps('payoutProfile.accountNumber')}
            />

            <Select
              label="Select bank"
              searchable
              data={(data?.data ?? [])
                .filter((_) => {
                  //@ts-ignore
                  return _.code !== '50739';
                })
                .map((e) => {
                  //@ts-ignore
                  return { label: e?.name, value: e?.code };
                })}
              {...form.getInputProps('payoutProfile.bankCode')}
              onChange={(code) => {
                //@ts-ignore
                let bank = data?.data.find((_) => _.code == code);
                console.log(bank);
                form.setFieldValue('payoutProfile.bankCode', code);
                //@ts-ignore
                form.setFieldValue('payoutProfile.bankName', bank?.name);
              }}
            />

            <TextInput label="Account name" {...form.getInputProps('payoutProfile.accountName')} />
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
              fullWidth
              type="submit"
              flex={1}
            >
              Continue
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </form>
  );
}
