import React, { createContext, useState, ReactNode } from 'react';

type BlockContextType = {
  keyboardBlockTime: string;
  setKeyboardBlockTime: (time: string) => void;
  trackpadBlockTime: string;
  setTrackpadBlockTime: (time: string) => void;
  touchBlockTime: string;
  setTouchBlockTime: (time: string) => void;
  blockAllTime: string;
  setBlockAllTime: (time: string) => void;
};

const BlockContext = createContext<BlockContextType | undefined>(undefined);

export const BlockProvider = ({ children }: { children: ReactNode }) => {
  const [keyboardBlockTime, setKeyboardBlockTime] = useState('30');
  const [trackpadBlockTime, setTrackpadBlockTime] = useState('30');
  const [touchBlockTime, setTouchBlockTime] = useState('30');
  const [blockAllTime, setBlockAllTime] = useState('30');

  return (
    <BlockContext.Provider
      value={{
        keyboardBlockTime,
        setKeyboardBlockTime,
        trackpadBlockTime,
        setTrackpadBlockTime,
        touchBlockTime,
        setTouchBlockTime,
        blockAllTime,
        setBlockAllTime,
      }}
    >
      {children}
    </BlockContext.Provider>
  );
};

export const useBlockContext = () => {
  const context = React.useContext(BlockContext);
  if (context === undefined) {
    throw new Error('useBlockContext must be used within a BlockProvider');
  }
  return context;
};
