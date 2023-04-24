export interface IEl {
  name: string;
  _id: string;
  images: string[];
  price: number;
  remarks: string;
}

export interface IProps {
  data: any;
  fetchMore: any;
}
