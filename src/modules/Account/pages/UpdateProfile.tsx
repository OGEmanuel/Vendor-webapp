import { useProfileMutation } from '@/hooks/mutations/useProfileMutation';
import useLoggedInUser from '@/hooks/useLoggedInUser';
import { AccountPublicDto, UpdateAccountDTO } from '@/sdk/auth';
import BoxedImageDropzoneBox from '@/ui/TUI/Components/BoxImageDropzoneBox';
import ImageUploadButton from '@/ui/TUI/Components/ImageUploadButton';
import PhoneInput from '@/ui/TUI/Components/PhoneInput';
import SectionCard from '@/ui/TUI/Components/SectionCard';
import { Box, Button, Divider, Grid, GridCol, Group, Text, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function UpdateProfile() {
  const { profile } = useLoggedInUser();

  return (
    <SectionCard caption="Update your personal details" title="Profile">
      {profile && <Form user={profile} />}
    </SectionCard>
  );
}

function Form({ user }: { user: AccountPublicDto }) {
  const { mutate , isPending} = useProfileMutation();
  const form = useForm<UpdateAccountDTO>({
    initialValues: {
      ...user,
    },
  });

  console.log(user);
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        mutate(values, { onSuccess: () => {} });
      })}
    >
      <Grid>
        <GridCol>
          <Group>
            <Box w={100}>
              <BoxedImageDropzoneBox
                onUploaded={(url) => {
                  form.setFieldValue('profilePhoto', url);
                }}
                url={form.values.profilePhoto}
              />
            </Box>
            <ImageUploadButton
              label="Change photo"
              onUploaded={(url) => {
                form.setFieldValue('profilePhoto', url);
              }}
            />
          </Group>
        </GridCol>
        <Grid.Col span={{ md: 6 }}>
          <TextInput label="First name" {...form.getInputProps('firstName')} />
        </Grid.Col>
        <Grid.Col span={{ md: 6 }}>
          <TextInput label="Last name" {...form.getInputProps('lastName')} />
        </Grid.Col>
        <Grid.Col span={{ md: 12 }}>
          <TextInput label="Email" disabled value={user.email} />
        </Grid.Col>
        <Grid.Col span={{ md: 12 }}>
          <PhoneInput label="Phone" disabled value={user.phone} />
        </Grid.Col>
        <Grid.Col span={{ md: 12 }}>
          <Button variant="default" type="submit" loading={isPending}>
            Save Changes
          </Button>
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
