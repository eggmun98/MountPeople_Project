import { useRef } from "react";

export const useAreaScrollMode = (): {
  onClickArea: (ref: React.RefObject<HTMLDivElement>) => () => void;
  scrollRefB: React.RefObject<HTMLDivElement>;
  scrollRefC: React.RefObject<HTMLDivElement>;
  scrollRefD: React.RefObject<HTMLDivElement>;
} => {
  const scrollRefB = useRef<HTMLDivElement>(null);
  const scrollRefC = useRef<HTMLDivElement>(null);
  const scrollRefD = useRef<HTMLDivElement>(null);

  const onClickArea = (ref: React.RefObject<HTMLDivElement>) => (): void => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return {
    onClickArea,
    scrollRefB,
    scrollRefC,
    scrollRefD,
  };
};
