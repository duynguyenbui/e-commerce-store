'use client';

import { formatter } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setisMounted] = useState(false);
  
  useEffect(() => {
    setisMounted(true);
  }, []);

  if(!isMounted) {
    return null;
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
