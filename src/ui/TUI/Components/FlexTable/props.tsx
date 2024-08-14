import { TableProps, TableThProps } from '@mantine/core';
import React from 'react';

export type FlexDataTableColumn = {
  header: string | React.ReactNode | React.FC;
  accessor: string;
  render?: React.FC<{ record: Record<string, any> }>;
  thProps?: TableThProps;
};

export type FlexDataTableProps = {
  columns: FlexDataTableColumn[];
  queryAccessors?: string[];
  records: Record<string, any>[];
  headerNode: React.ReactNode;
  RenderMobile?: React.FC<{ record: Record<string, any> }>;
} & TableProps;
