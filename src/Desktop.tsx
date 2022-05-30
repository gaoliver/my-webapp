import React, { FC } from 'react';

interface DesktopProps {
  onToggleTheme: () => void;
}

export const Desktop: FC<DesktopProps> = () => {
  return (
    <>
      <div>Desktop</div>
    </>
  );
};
