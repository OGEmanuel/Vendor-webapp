import { Box, Grid, Paper, Stack, Table, Text, useMantineTheme } from '@mantine/core';
import React from 'react';
import { FlexDataTableProps } from './props';
const FlexDataTable: React.FC<FlexDataTableProps> = ({
  columns,
  records,
  onSelect,
  headerNode,
  ...props
}) => {
  const theme = useMantineTheme();
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
        <Table  verticalSpacing={'md'} {...props}>
          <Table.Thead
            style={{
              background: theme.colors.gray[1],
              borderTop: `1px solid ${theme.colors.gray[3]}`,
            }}
          >
            <Table.Tr>
              {columns.map((ele, idx) => (
                <Table.Th key={idx} {...(ele.thProps ?? {})} fw={'500'} c={"dimmed"} tt={'capitalize'}>
                  {typeof ele.header === 'function' ? <ele.header /> : ele.header}
                </Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        {records.length == 0 && (
          <Box pb="xl">
            <Text ta={'center'}>No records to show</Text>
          </Box>
        )}
      </Stack>
    </Paper>
  );
};

export default FlexDataTable;
