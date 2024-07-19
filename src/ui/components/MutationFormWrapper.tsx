import React from 'react';
import {
  Box,
  Button,
  Center,
  Group,
  Loader,
  LoadingOverlay,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core';

import { UseMutationResult } from '@tanstack/react-query';

export default function MutationFormWrapper({
  mutation,
  children,
  onContinue,
}: {
  mutation: UseMutationResult<unknown, unknown, any, unknown>;
  children: React.ReactNode;
  onContinue: () => void;
}) {
  const theme = useMantineTheme();
  const OverlayProcessing = (
    <Center>
      <Center
        bg={'white'}
        p="md"
        style={{
          boxShadow: theme.shadows.sm,
          borderRadius: 50,
          border: `.5px solid ${theme.colors.gray[2]}`,
        }}
      >
        <Loader />
      </Center>
    </Center>
  );

  const OverlayError = (
    <Stack align="center">
      <Text ta={'center'} fw="bold">
        Error Occured
      </Text>
      <Text ta={'center'}>
        We encountered an error while trying to complete your request, <br />
        can you please try again.
      </Text>
      <Group>
        <Button
          color="dark"
          c="red"
          onClick={() => {
            mutation.reset();
          }}
        >
          Try again
        </Button>
      </Group>
    </Stack>
  );

  const OverlaySuccess = (
    <Stack align="center">
      <Text ta={'center'} fw="bold">
        Request completed!!!
      </Text>
      <Group>
        <Button
          onClick={() => {
            onContinue();
          }}
        >
          Continue
        </Button>
      </Group>
    </Stack>
  );

  return (
    <>
      <Box style={{ position: 'relative' }}>
        {mutation?.isIdle == true ? null : (
          <LoadingOverlay
            visible={true}
            loaderProps={{
              children:
                mutation?.status == 'success'
                  ? OverlaySuccess
                  : mutation?.status == 'error'
                    ? OverlayError
                    : OverlayProcessing,
            }}
          />
        )}
        {children}
        {/* {InfoOverlay} */}
      </Box>
    </>
  );
}
