export interface IProps {
  refetch: (params: { page: number }) => void;
  count: number | undefined;
}
