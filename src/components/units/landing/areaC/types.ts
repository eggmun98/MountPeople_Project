export interface IProps {
  onClickArea: (ref: React.RefObject<HTMLDivElement>) => () => void;
  scrollRefC: React.RefObject<HTMLDivElement>;
  scrollRefD: React.RefObject<HTMLDivElement>;
}
