import { UpdateVendorKYCDTO, Vendor, VendorKYCCredentialsBusinessTypeEnum } from '@/sdk/vendor';
import { TUIBackButtonActionIcon } from '@/ui/TUI/Components/BackButton';
import GreenFileSvg from '@/ui/assets/illustrations/GreeenFileSvg.svg';
import FileUploadButton from '@/ui/TUI/Components/FileUploadButton';
import { Box, Button, Grid, Group, Paper, Stack, Text, useMantineTheme } from '@mantine/core';
import { useForm } from '@mantine/form';
import { getFileExtension } from '@/utils';
import useUpdateVendorKycMutation from '../hooks/useUpdateVendorKycMutation';
import { OnboardingContext } from '../pages/VendorOnboarding';
import { useContext } from 'react';

export default function UpdateKYCForm({ initial }: { initial: Vendor }) {
  const { back } = useContext(OnboardingContext);
  const theme = useMantineTheme();
  const { mutate, isPending } = useUpdateVendorKycMutation();
  const form = useForm<UpdateVendorKYCDTO>({
    initialValues: {
      kycCredentials: {
        TIN: '',
        idProofUrl: '',
        CACDocumentURL: '',
        addressProofUrl: '',
        businessType: VendorKYCCredentialsBusinessTypeEnum.Restaurant,
        ...initial.kycCredentials,
      },
    },
  });

  function HandleFileUpload({
    urlPath,
    caption,
  }: {
    urlPath: 'CACDocumentURL' | 'addressProofUrl' | ' idProofUrl';
    caption: string;
  }) {
    let url = '';
    if (form.values?.kycCredentials) {
      //@ts-ignore
      url = form.values?.kycCredentials[urlPath] as string;
    }

    if (form.values.kycCredentials) {
      return (
        <Box>
          {url == '' ? (
            <FileUploadButton
              label="Upload document"
              onUploaded={(url) => {
                console.log(url);
                form.setFieldValue(`kycCredentials.${urlPath}`, url);
              }}
            />
          ) : (
            <Group>
              <img src={GreenFileSvg} />
              <Box flex={1}>
                <Text size="sm">{caption}</Text>
                <Text size="xs" c={'dimmed'}>
                  .{getFileExtension(url) ?? ''}
                </Text>
              </Box>
              <FileUploadButton
                label="Update document"
                onUploaded={(url) => {
                  console.log(url);
                  form.setFieldValue('kycCredentials.CACDocumentURL', url);
                }}
              />
            </Group>
          )}
        </Box>
      );
    }

    return <Box />;
  }

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        mutate({ vendorId: initial.id, payload: values }, { onSuccess: () => {} });
      })}
    >
      <Grid>
        <Grid.Col span={{ md: 12 }}>
          <Stack>
            <Paper bg={theme.colors.gray[0]} p="md">
              <Stack>
                <Box>
                  <Text fw={'bold'}>CAC business document</Text>
                  <Text size="sm" c={'dimmed'}>
                    Please provide a copy of your CAC business registration
                  </Text>
                </Box>
                <HandleFileUpload urlPath="CACDocumentURL" caption="CAC Document" />
              </Stack>
            </Paper>

            <Paper bg={theme.colors.gray[0]} p="md">
              <Stack>
                <Box>
                  <Text fw={'bold'}>Proof of address</Text>
                  <Text size="sm" c={'dimmed'}>
                    Submit a recent utility bill or lease agreement
                  </Text>
                </Box>
                <HandleFileUpload urlPath="addressProofUrl" caption="Address doc" />
              </Stack>
            </Paper>
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
              loading={isPending}
            >
              Continue
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </form>
  );
}
