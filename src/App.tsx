import React, { useCallback, useEffect, useState } from 'react';

import Quiz from './components/mainComponents/quiz';
import Lodaer from './components/reusable/lodaer';
import { CalcDataContext } from './contexts';
import { CalcDataPayload } from './contexts/calcDataTypes';
import * as services from './services';

const App = () => {
  const [calcData, setCalcData] = useState<CalcDataPayload | null>(null);
  const [isPending, setIsPending] = useState(true);

  const getCalcData = useCallback(async () => {
    setIsPending(true);

    try {
      const response = await services.getCalcData();
      setCalcData(response);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setIsPending(false);
    }
  }, []);

  useEffect(() => {
    getCalcData();
  }, [getCalcData]);

  if (isPending) return <Lodaer />;

  return (
    <CalcDataContext.Provider value={{ calcData, setCalcData }}>
      <Quiz />
    </CalcDataContext.Provider>
  );
};

export default App;
