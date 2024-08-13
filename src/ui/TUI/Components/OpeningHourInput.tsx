import { OpeningHours } from '@/sdk/vendor';
import { Grid, Group, Switch, Text } from '@mantine/core';
import { TimeInput } from '@mantine/dates';

export default function OpeningHoursInput({
  day,
  payload,
  onChange,
}: {
  day: string;
  payload: OpeningHours;
  onChange: (payload: OpeningHours) => void;
}) {
  function toggleSwitch() {
    let _ = payload;
    _.alwaysOpen = !payload.alwaysOpen;
    onChange(_);
  }

  console.log(payload)
  return (
    <Grid>
      <Grid.Col span={{ base: 5 }}>
        <Group>
          <Switch
            label={''}
            checked={payload.alwaysOpen}
            size="lg"
            onChange={() => {
              toggleSwitch();
            }}
          />
          <Text tt={'capitalize'}>{day}</Text>
        </Group>
      </Grid.Col>
      <Grid.Col span={{ base: 7 }}>
        <Group>
          <Group>
            <Text>From</Text>
            <TimeInput
              value={payload.open}
              onChange={(event) => {
                let _ = payload;
                _.open = event.target.value;
                onChange(_);
              }}
            />
          </Group>
          <Group>
            <Text>To</Text>
            <TimeInput
              value={payload.close}
              onChange={(event) => {
                let _ = payload;
                _.close = event.target.value;
                onChange(_);
              }}
            />
          </Group>
        </Group>
      </Grid.Col>
    </Grid>
  );
}
