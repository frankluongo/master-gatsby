import React, { createContext, useContext, useState } from 'react';

const defaults = {
  hotSlices: [],
  sliceMasters: [],
};

const SlicesContext = createContext();

export function SlicesProvider({ children }) {
  const [hotSlices, setHotSlices] = useState(null);
  const [sliceMasters, setSliceMasters] = useState(null);

  return (
    <SlicesContext.Provider
      value={{
        ...defaults,
        hotSlices,
        setHotSlices,
        sliceMasters,
        setSliceMasters,
      }}
    >
      {children}
    </SlicesContext.Provider>
  );
}

export function useSlicesContext() {
  return useContext(SlicesContext);
}
