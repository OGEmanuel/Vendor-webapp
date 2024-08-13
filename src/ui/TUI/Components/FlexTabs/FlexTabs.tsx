import { Tabs, TabsProps, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate, useSearchParams } from 'react-router-dom';
import classes from './styles.module.css';


export default function FlexTabs({ ...props }: TabsProps) {
  const mantine = useMantineTheme();
  const matches = useMediaQuery(`(min-width: ${mantine.breakpoints.sm})`);
  
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();

  return (
    <Tabs
      pl={'md'}
      classNames={classes}
      orientation={matches == true ? 'vertical' : 'horizontal'}
      color="white"
      {...props}
      onChange={(value) => navigate(`?page_id=${value}`)}
      value={searchParams.get('page_id') ?? undefined}
      styles={{
        panel: {},
      }}
      variant='pills'
    
    />
  );
}
