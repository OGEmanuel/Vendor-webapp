import { UpdateVendorDTO, Vendor } from '@/sdk/vendor';
import BoxedImageDropzoneBox from '@/ui/TUI/Components/BoxImageDropzoneBox';
import ImageDropzoneBox from '@/ui/TUI/Components/ImageDropzoneBox';
import ImageUploadButton from '@/ui/TUI/Components/ImageUploadButton';
import PhoneInput from '@/ui/TUI/Components/PhoneInput';
import { Box, Button, Grid, Group, Stack, Text, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import useUpdateVendorProfileMutation from '../hooks/useUpdateVendorProfileMutation';

export default function UpdateVendorProfileForm({ initial }: { initial: Vendor }) {
  const { mutate } = useUpdateVendorProfileMutation();
  const form = useForm<UpdateVendorDTO>({
    initialValues: {
      ...initial,
    },
    validate: {
      contactEmail: (value) =>
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value ?? '') ? null : 'Invalid email address',
      contactPhone: (value) =>
        /^\+[1-9]{1,3}[0-9]{10,14}$/.test(value ?? '') ? null : 'Invalid phone number',
   
   
      vendorName: (value) => (value ? null : 'Vendor name is required'),
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
          <Button disabled={form.isValid() == true ? false : true} fullWidth type="submit">
            Continue
          </Button>
        </Grid.Col>
      </Grid>
    </form>
  );
}
