import { Box, Grid, Paper, Stack, Table, Text, useMantineTheme } from '@mantine/core';
import React from 'react';
import { FlexDataTableProps } from './props';
import { useMediaQuery } from '@mantine/hooks';
const FlexDataTable: React.FC<FlexDataTableProps> = ({
  columns,
  records,
  RenderMobile,
  onSelect,
  headerNode,
  ...props
}) => {
  const theme = useMantineTheme();
  const mantine = useMantineTheme();
  const matches = useMediaQuery(`(max-width: ${mantine.breakpoints.md})`);

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

  function RenderTableComp() {
    return (
      <Table verticalSpacing={'md'} {...props}>
        <Table.Thead
          style={{
            background: theme.colors.gray[0],
            borderTop: `1px solid ${theme.colors.gray[1]}`,
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
    );
  }

  return (
    <Paper withBorder>
      <Stack gap={0}>
        <Grid p="md">
          <Grid.Col span={{ base: 12 }}>{headerNode}</Grid.Col>
        </Grid>
        {matches !== true ? (
          <RenderTableComp />
        ) : RenderMobile == undefined ? (
          <RenderTableComp />
        ) : (
          <Stack>
            {records.map((record, index) => {
              return (
                <React.Fragment>
                  <RenderMobile record={record} key={index} />
                </React.Fragment>
              );
            })}
          </Stack>
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

export default FlexDataTable;
