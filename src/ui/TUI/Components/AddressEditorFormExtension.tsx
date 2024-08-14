import { locationApi } from '@/config/sdk';
import { ActionIcon, Box, Group, Select, Textarea } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import NgnIll from '@/ui/assets/illustrations/NgnFlag.svg?react';
import { MapsRefreshIcon, MapsSearchIcon } from 'hugeicons-react';
import { showNotification } from '@mantine/notifications';
import { Address } from '@/sdk/vendor';
export default function AddressEditorFormExtension({
  address,
  onChange,
}: {
  address: Address | undefined;
  onChange: (address: Address) => void;
}) {
  const defaultAddress = {
    address: '',
    city: '-',
    country: 'Nigeria',
    countryCode: 'NG',
    latitude: 0,
    longitude: 0,
    state: '',
    stateCode: '',
    notes: '',
  };
  const { data } = useQuery({
    queryFn: () => {
      return locationApi.miscellaneousControllerGetStates('NG');
    },
    queryKey: ['countries'],
  });

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          showNotification({ message: 'Long/Lat has been updated...' });
          onChange({
            ...(address ?? defaultAddress),
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              showNotification({ message: 'User denied the request for Geolocation.' });
              break;
            case error.POSITION_UNAVAILABLE:
              showNotification({ message: 'Location information is unavailable.n.' });

              break;
            case error.TIMEOUT:
              showNotification({ message: 'The request to get user location timed out.' });
              break;
            default:
              showNotification({ message: 'An unknown error occurred.' });
              break;
          }
        },
        {
          enableHighAccuracy: true, // This ensures precise location
          timeout: 5000, // Time to wait for location
          maximumAge: 0, // Do not use cached location
        }
      );
    } else {
      showNotification({ message: 'Geolocation is not supported by this browser.' });
    }
  };

  return (
    <Box w="100%">
      <Group mb={'md'} align='flex-end'>
        <Select
          label="State"
          value={address?.stateCode}
          flex={1}
          leftSection={<NgnIll />}
          searchable
          data={data?.data.map((e) => {
            return { label: e.name, value: e.code };
          })}
          onChange={(code) => {
            let state = data?.data.find((_) => _.code == code);
            onChange({
              ...(address ?? defaultAddress),
              state: state?.name ?? '',
              stateCode: state?.code ?? '',
            });
          }}
        />
        <ActionIcon onClick={handleGetLocation} variant="default" size={"lg"}>
          {address?.longitude == 0 || address?.longitude == 1 || address?.longitude == undefined ? (
            <MapsSearchIcon color={'green'} />
          ) : (
            <MapsRefreshIcon color={'green'} />
          )}
        </ActionIcon>
      </Group>
      <Textarea
        label="Address"
        value={address?.address}
        onChange={(event) => {
          onChange({
            ...(address ?? defaultAddress),
            address: event.target.value,
          });
        }}
      />
    </Box>
  );
}
