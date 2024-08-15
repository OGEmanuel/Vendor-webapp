import { OpeningHours } from '@/sdk/vendor';
import { Grid, Group, Paper, Switch, Text, useMantineTheme } from '@mantine/core';
import { TimeInput } from '@mantine/dates';
import { Moon02Icon } from 'hugeicons-react';

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

  const theme = useMantineTheme();

  return (
    <Grid>
      <Grid.Col span={{ base: 5 }}>
        <Group>
          <Switch
            label={''}
            color="green"
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
        {payload?.alwaysOpen == false ? (
          <Paper p="xs" bg={theme.colors.gray[0]} withBorder>
            <Group>
              <Moon02Icon color={theme.colors.gray[7]} />
              <Text c={theme.colors.gray[7]}>Unavailable</Text>
            </Group>
          </Paper>
        ) : (
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
        )}
      </Grid.Col>
    </Grid>
  );
}
