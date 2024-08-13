import { Box, Divider, Grid, Paper, Stack, Table, Text, useMantineTheme } from '@mantine/core';
import React from 'react';
import { FlexDataTableColumn, FlexDataTableProps } from './props';
import { useMediaQuery } from '@mantine/hooks';
const FlexDataTable: React.FC<FlexDataTableProps> = ({
  columns,
  records,
  onSelect,
  headerNode,
  ...props
}) => {
  const theme = useMantineTheme();
  const mantine = useMantineTheme();
  const matches = useMediaQuery(`(min-width: ${mantine.breakpoints.md})`);

  const rows = records.map((record, idxroot, []) => (
    <Table.Tr key={`${record.id}`}>
      {columns.map((element, idx) => {
        if (element.render) {
          return (
            <Table.Td key={idxroot + idx}>
              <element.render record={record} />
            </Table.Td>
          );
        }
        return <Table.Td key={idxroot + idx}>{record[element.accessor]}</Table.Td>;
      })}
    </Table.Tr>
  ));

  return (
    <Paper withBorder>
      <Stack>
        <Grid p="xs">
          <Grid.Col span={{ base: 12 }}>{headerNode}</Grid.Col>
        </Grid>

        {matches == false ? (
          <RenderForMobile columns={columns} records={records} />
        ) : (
          <Table verticalSpacing={'md'} {...props}>
            <Table.Thead
              style={{
                background: theme.colors.gray[1],
                borderTop: `1px solid ${theme.colors.gray[3]}`,
              }}
            >
              <Table.Tr>
                {columns.map((ele, idx) => (
                  <Table.Th
                    key={idx}
                    {...(ele.thProps ?? {})}
                    fw={'500'}
                    c={'dimmed'}
                    tt={'capitalize'}
                  >
                    {typeof ele.header === 'function' ? <ele.header /> : ele.header}
                  </Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        )}

        {records.length == 0 && (
          <Box pb="xl">
            <Text ta={'center'}>No records to show</Text>
          </Box>
        )}
      </Stack>
    </Paper>
  );
};

function RenderForMobile({ records, columns }: { records: any[]; columns: FlexDataTableColumn[] }) {
  return (
    <Box>
      {records.map((record, idxroot, []) => (
        <Box>
          <Grid key={`${record.id}`} gutter={'2px'} p={'sm'}>
            {columns.map((element, idx) => {
              if (element.render) {
                return (
                  <Grid.Col span={{ base: 6 }} key={idxroot + idx}>
                    <element.render record={record} />
                  </Grid.Col>
                );
              }
              return (
                <Grid.Col key={idxroot + idx} span={{ base: 6 }}>
                  {record[element.accessor]}
                </Grid.Col>
              );
            })}
          </Grid>
          <Divider variant="dashed" />
        </Box>
      ))}
    </Box>
  );
}
export default FlexDataTable;
