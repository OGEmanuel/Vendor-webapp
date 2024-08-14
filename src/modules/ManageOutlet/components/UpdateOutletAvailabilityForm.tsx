import { DaysOfWork, OpeningHours, Outlet, OutletConfig, UpdateOutletDTO } from '@/sdk/vendor';
import OpeningHoursInput from '@/ui/TUI/Components/OpeningHourInput';
import { Box, Button, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import Card from '@/ui/TUI/Components/Card';
import useUpdateOutletMutation from '../hooks/useUpdateOutletMutation';
import { showNotification } from '@mantine/notifications';
import { DefaultDaysofWork } from '@/utils';

type Days = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
export default function UpdateOutletAvailabilityForm({ initial }: { initial: Outlet }) {
  const { isPending, mutate } = useUpdateOutletMutation();
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
        mutate({ outletId: initial.id, payload: values }, { onSuccess: () => {
          showNotification({message:"Updated successfully..."})
        } });
      })}
    >
      <Card
        title="Business hours"
        right={
          <Box>
            <Button
              variant="default"
              disabled={form.isValid() == true ? false : true}
              flex={1}
              type="submit"
              loading={isPending}
            >
              Save changes
            </Button>
          </Box>
        }
      >
        <Stack>
          <SetOpeninHour day="monday" />
          <SetOpeninHour day="tuesday" />
          <SetOpeninHour day="wednesday" />
          <SetOpeninHour day="thursday" />
          <SetOpeninHour day="friday" />
          <SetOpeninHour day="saturday" />
          <SetOpeninHour day="sunday" />
        </Stack>
      </Card>
    </form>
  );
}
