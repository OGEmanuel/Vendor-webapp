import TUIPageShell from '@/ui/TUI/Templates/TUIPageShell';
import Right from './right';
import InventoryTabs from './tabs';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Overview from './overview';
import Categories from './categories';
import Items from './items';
import Options from './options';
import { useEffect } from 'react';

export default function InventoryManagement() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const overview = params.get('tabId') === 'overview';
  const categories = params.get('tabId') === 'categories';
  const items = params.get('tabId') === 'items';
  const options = params.get('tabId') === 'options';

  useEffect(() => {
    navigate(`?tabId=overview`);
  }, []);

  return (
    <TUIPageShell
      title="Inventory"
      caption="Track and update your items to ensure customers see what’s in stock"
      right={<Right />}
      tabs={<InventoryTabs />}
    >
      {overview && <Overview />}
      {categories && <Categories />}
      {items && <Items />}
      {options && <Options />}
    </TUIPageShell>
  );
}
