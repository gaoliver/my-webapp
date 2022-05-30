import React, { FC } from 'react';

interface MobileProps {
  onToggleTheme: () => void;
}

export const Mobile: FC<MobileProps> = () => {
  return (
    <>
      <div>Mobile</div>
    </>
  );
};
