import { createContext, useContext, useState, useCallback } from "react";


const AppContext = createContext({} as any);

export const SliderProvider = ({ children }: any) => {
  const [imgs, setImgs] = useState<SlideType[]>([]);

  type SlideType = {
    id: number;
    img: string;
    description: string;
    time: number;
  };

  return (
    <AppContext.Provider value={{ imgs, setImgs }}>
      {children}
    </AppContext.Provider>
  );
};

export function useSlider() {
  return useContext(AppContext);
}