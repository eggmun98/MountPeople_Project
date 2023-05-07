export interface IProps {
  onClickArea: (ref: React.RefObject<HTMLDivElement>) => () => void;
  scrollRefB: React.RefObject<HTMLDivElement>;
}
