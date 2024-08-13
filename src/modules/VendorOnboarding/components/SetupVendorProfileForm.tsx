import { CreateVendorProfileDTO } from '@/sdk/vendor';
import BoxedImageDropzoneBox from '@/ui/TUI/Components/BoxImageDropzoneBox';
import ImageDropzoneBox from '@/ui/TUI/Components/ImageDropzoneBox';
import PhoneInput from '@/ui/TUI/Components/PhoneInput';
import { Box, Button, Grid, Group, Stack, Text, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import useCreateVendorProfile from '../hooks/useCreateVendorProfileMutation';
import { useEffect } from 'react';
import ImageUploadButton from '@/ui/TUI/Components/ImageUploadButton';

export default function SetupVendorProfileForm() {
  const { isPending, mutate } = useCreateVendorProfile();
  const form = useForm<CreateVendorProfileDTO>({
    initialValues: {
      contactEmail: '',
      contactPhone: '',
      coverPhoto: '',
      logo: '',
      longDescription: '',
      shortDescription: '',
      vendorName: '',
      accountId: '',
    },
    validateInputOnChange: true,
    validate: {
      contactEmail: (value) =>
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value ?? '') ? null : 'Invalid email address',
      contactPhone: (value) =>
        /^\+[1-9]{1,3}[0-9]{10,14}$/.test(value ?? '') ? null : 'Invalid phone number',
      // coverPhoto: (value) => (value ? null : 'Cover photo is required'),
      // logo: (value) => (value ? null : 'Logo is required'),
      longDescription: (value) =>
        value ?? ''.length > 20 ? null : 'Long description should be at least 50 characters',
      shortDescription: (value) =>
        value ?? ''.length > 10 ? null : 'Short description should be at least 10 characters',
      vendorName: (value) => (value ? null : 'Vendor name is required'),
    },
  });

  useEffect(() => {
    form.validate();
  }, []);
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        mutate(values, { onSuccess: () => {} });
      })}
    >
      <Grid>
        <Grid.Col span={{ md: 12 }}>
          <Group>
            <Box w={80}>
              <BoxedImageDropzoneBox
                onUploaded={(url) => {
                  form.setFieldValue('logo', url);
                }}
                url={form.values.logo}
              />
            </Box>
            <Box flex={1}>
              <Text fw={'bold'}>Upload business logo</Text>
              <Text size="sm" c={'dimmed'}>
                Display your logo to attract customers
              </Text>
            </Box>
            <ImageUploadButton
              label="Upload Photo"
              onUploaded={(url) => {
                form.setFieldValue('logo', url);
              }}
            />
          </Group>
        </Grid.Col>

        <Grid.Col span={{ md: 12 }}>
          <Stack>
            <Box>
              <Text fw={'bold'}>Upload Cover photo</Text>
              <Text size="sm" c={'dimmed'}>
                Add a photo to highlight what you offer
              </Text>
            </Box>
            <ImageDropzoneBox
              onUploaded={(url) => {
                form.setFieldValue('coverPhoto', url);
              }}
              url={form.values.coverPhoto}
            />
          </Stack>
        </Grid.Col>

        <Grid.Col span={{ md: 12 }}>
          <TextInput label={'Business name'} {...form.getInputProps('vendorName')} />
        </Grid.Col>

        <Grid.Col span={{ md: 12 }}>
          <TextInput label={'Short description'} {...form.getInputProps('shortDescription')} />
        </Grid.Col>

        <Grid.Col span={{ md: 12 }}>
          <Textarea label={'Long description'} {...form.getInputProps('longDescription')} />
        </Grid.Col>

        <Grid.Col span={{ md: 12 }}>
          <TextInput label={'Contact email'} {...form.getInputProps('contactEmail')} />
        </Grid.Col>

        <Grid.Col span={{ md: 12 }}>
          <PhoneInput label={'Contact number'} {...form.getInputProps('contactPhone')} />
        </Grid.Col>

        <Grid.Col span={{ md: 12 }}>
          <Button
            disabled={form.isValid() == true ? false : true}
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
