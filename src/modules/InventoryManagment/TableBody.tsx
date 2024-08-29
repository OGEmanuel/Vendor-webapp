import { Box } from '@mantine/core';
import { ReactNode } from 'react';

const TableBody = ({
  children,
  p,
  gap,
  borderRadius,
}: {
  children: ReactNode;
  p?: number;
  gap?: number;
  borderRadius?: string;
}) => {
  return (
    <Box
      p={p || 0}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: gap || 0,
        borderLeft: '1px solid #ECECEC',
        borderRight: '1px solid #ECECEC',
        borderBottom: '1px solid #ECECEC',
        borderRadius: borderRadius ? borderRadius : '',
      }}
    >
      {children}
    </Box>
  );
};

export default TableBody;
