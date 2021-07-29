import { createContext, useContext } from 'react';
import { CalcDataPayload } from './calcDataTypes';

export interface CalcContextConf{
  calcData: CalcDataPayload | null;
  setCalcData: (payload:CalcDataPayload) => void
}

export const CalcDataContext = createContext<CalcContextConf | null>(null);
CalcDataContext.displayName = 'CalcDataContext';

export const useCalcData = () => useContext(CalcDataContext);
