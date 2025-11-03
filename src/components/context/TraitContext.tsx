'use client';

import { createContext, useContext, useState } from 'react';

type Trait = 'Signalborn' | 'Firekeeper' | 'Chainbreaker';

interface TraitContextType {
  trait: Trait;
  switchTrait: () => void;
}

const TraitContext = createContext<TraitContextType | undefined>(undefined);

export function TraitProvider({ children }: { children: React.ReactNode }) {
  const [trait, setTrait] = useState<Trait>('Signalborn');

  const switchTrait = () => {
    setTrait((prev) =>
      prev === 'Signalborn' ? 'Firekeeper' : prev === 'Firekeeper' ? 'Chainbreaker' : 'Signalborn'
    );
  };

  return (
    <TraitContext.Provider value={{ trait, switchTrait }}>
      {children}
    </TraitContext.Provider>
  );
}

export function useTrait() {
  const context = useContext(TraitContext);
  if (!context) throw new Error('useTrait must be used within TraitProvider');
  return context;
}
