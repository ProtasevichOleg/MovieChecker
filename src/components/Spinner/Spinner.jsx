import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const Spinner = () => {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return null;
};

export default Spinner;
