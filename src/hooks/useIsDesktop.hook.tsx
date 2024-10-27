import { useState, useEffect } from 'react';

import { DeviceBreakPoint } from '../constants/types/DeviceBreakPoint';
const useIsDesktop = (breakpoint: number) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= DeviceBreakPoint.DESKTOP);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isDesktop;
};

export default useIsDesktop;
