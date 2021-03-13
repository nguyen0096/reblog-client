import { useContext, useEffect } from 'react';

import { ReactReduxContext } from 'react-redux';

import getInjectors from './reducerInjectors';

export const useInjectReducer = ({ key, reducer }) => {
  console.log("useInjectReducer");
  const context = useContext(ReactReduxContext);

  useEffect(() => {
    getInjectors(context.store).injectReducer(key, reducer);
  }, []);
};

export default useInjectReducer;