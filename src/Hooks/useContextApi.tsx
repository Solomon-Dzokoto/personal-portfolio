import { createContext, useState } from "react";

interface Value {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean | ((prev: boolean) => boolean)) => void;
  primaryColor: string;
  setPrimaryColor: (primaryColor: string) => void;
  backgroundColor: string;
  setBackgroundColor: (backgroundColor: string) => void;
  isPrime: boolean;
  setIsPrime: (isPrime: boolean) => void;
}
const initialValue: Value = {
  isOpen: false,
  setIsOpen: () => null,
  primaryColor: "#C72227",
  setPrimaryColor: () => null,
  backgroundColor: "white",
  setBackgroundColor: () => null,
  isPrime: true,
  setIsPrime: () => null,
};
export const context = createContext<Value>(initialValue);

interface Props {
  children: React.ReactNode;
}
const UseProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [primaryColor, setPrimaryColor] = useState<string>("#C72227");
  const [backgroundColor, setBackgroundColor] = useState<string>("white");
  const [isPrime, setIsPrime] = useState<boolean>(true);
  return (
    <context.Provider
      value={{
        setIsPrime,
        isPrime,
        isOpen,
        setIsOpen,
        primaryColor,
        setPrimaryColor,
        backgroundColor,
        setBackgroundColor,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default UseProvider;
