import { useState, useEffect } from 'react';

import { DeviceType } from '../constants/types/DeviceType';
const useIsDesktop = (breakpoint: number) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= DeviceType.DESKTOP);

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
