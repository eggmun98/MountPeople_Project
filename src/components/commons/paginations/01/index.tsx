import { useState } from "react";
import { IProps } from "./types";
import { Button } from "./styles";
import { useRecoilState } from "recoil";
import { numberState } from "../../stores";

export default function Paginations01(props: IProps): JSX.Element {
  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil((props.count ?? 0) / 10);
  const [activedPage, setActivedPage] = useState(1);
  const [number, setNumber] = useRecoilState(numberState);

  const onClickPageButton = (event: React.MouseEvent): void => {
    const activedPage = Number(event.currentTarget.id);
    setActivedPage(activedPage);
    setNumber(Number(event.currentTarget.id));
    props.refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivedPage(startPage + 10);
      setNumber(startPage + 10);
      props.refetch({ page: startPage + 10 });
    }
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivedPage(startPage - 10);
    setNumber(startPage + -10);
    props.refetch({ page: startPage - 10 });
  };

  return (
    <>
      <div onClick={onClickPrevPage} style={{ userSelect: "none" }}>
        {"<"}
      </div>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <Button
              key={index}
              id={String(index + startPage)}
              onClick={onClickPageButton}
              isActive={startPage + index === activedPage}
            >
              {index + startPage}
            </Button>
          )
      )}
      <div onClick={onClickNextPage} style={{ userSelect: "none" }}>
        {">"}
      </div>
    </>
  );
}
