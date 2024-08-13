import { UpdateAccountDTO } from '@/sdk/auth';
import BoxedImageDropzoneBox from '@/ui/TUI/Components/BoxImageDropzoneBox';
import ImageUploadButton from '@/ui/TUI/Components/ImageUploadButton';
import PhoneInput from '@/ui/TUI/Components/PhoneInput';
import SectionCard from '@/ui/TUI/Components/SectionCard';
import { Box, Button, Divider, Grid, GridCol, Group, Text, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function UpdateProfile() {
  return (
    <SectionCard caption="Update your personal details" title="Profile">
      <Form />
    </SectionCard>
  );
}

function Form() {
  const form = useForm<UpdateAccountDTO>({
    initialValues: {
      profilePhoto: '',
      bio: '',
      firstName: '',
      lastName: '',
    },
  });

  return (
    <form>
      <Grid>
        <GridCol>
          <Group>
            <Box w={100}>
            <BoxedImageDropzoneBox onUploaded={() => {}} />
            </Box>
            <ImageUploadButton label="Change photo" onUploaded={() => {}} />
          </Group>
        </GridCol>
        <Grid.Col span={{ md: 6 }}>
          <TextInput label="First name" {...form.getInputProps('firstName')} />
        </Grid.Col>
        <Grid.Col span={{ md: 6 }}>
          <TextInput label="Last name" {...form.getInputProps('lastName')} />
        </Grid.Col>
        <Grid.Col span={{ md: 12 }}>
          <TextInput label="Email" disabled />
        </Grid.Col>
        <Grid.Col span={{ md: 12 }}>
          <PhoneInput label="Phone" disabled />
        </Grid.Col>
        <Grid.Col span={{ md: 12 }}>
          <Button variant="default">Save Changes</Button>
        </Grid.Col>
        <Grid.Col span={{ md: 12 }}>
          <Divider />
        </Grid.Col>

        <Grid.Col span={{ md: 12 }}>
          <Group>
            <Box flex={1}>
              <Title order={3}>Delete account</Title>
              <Text>Permanently delete your account</Text>
            </Box>
            <Button color="red" variant="outline">
              Delete
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
    </form>
  );
}
