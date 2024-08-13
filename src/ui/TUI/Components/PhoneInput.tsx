import { Box, Group, Text, TextInput, TextInputProps } from '@mantine/core';
import NgnFlag from '@/ui/assets/illustrations/NgnFlag.svg?react';
import { ArrowDown01Icon } from 'hugeicons-react';
import { useState } from 'react';
export default function PhoneInput({ label, ...props }: TextInputProps) {
  const [, setDisplayValue] = useState('');
  return (
    <Box>
      {label && (
        <Text size="sm" fw={'500'}>
          {label}
        </Text>
      )}
      <Box>
        <Group align="stretch" justify="stretch" gap={4}>
          <Group
            gap={4}
            px="8"
            style={(theme) => {
              return {
                border: `1px solid ${theme.colors.gray[5]}`,
                borderRadius: theme.radius.md,
                cursor: 'not-allowed',
              };
            }}
          >
            <NgnFlag />
            <Text>+234</Text>
            <ArrowDown01Icon />
          </Group>
          <TextInput
            flex={1}
            {...props}
            label={undefined}
            error={undefined}
            value={`${props.value}`.replace('+234', '')}
            onChange={(e) => {
              // Remove all non-numeric characters
              let value = e.target.value.replace(/[^0-9]/g, '');
              // Show the value without +234
              setDisplayValue(value);
              // Enforce the +234 prefix in the actual value
              const actualValue = `+234${value}`;
              e.target.value = actualValue;
              console.log(actualValue);
              // Call the original onChange handler if it exists
              if (props.onChange) {
                return props.onChange(e);
              }
            }}
          />
        </Group>
        {props.error && (
          <Text c={'red'} size="sm" mt={4}>
            {props.error}
          </Text>
        )}
      </Box>
    </Box>
  );
}
