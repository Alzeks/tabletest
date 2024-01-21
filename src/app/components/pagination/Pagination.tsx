"use client";

import styles from "./pagination.module.css";
import { useState } from "react";
import { allArray, funk} from "@/app/types";

const Pagination = (
  { paginFunk, startArray }: {paginFunk: funk, startArray: any}) => {
  const [countKeeper, setCountKeeper] = useState(0)
  const ITEM_PER_PAGE = 3;
  let count = 0
  let firstSlice = 0
  let secondSlice = ITEM_PER_PAGE
  count = countKeeper

  const hasPrev = count > 0
  const hasNext = count + ITEM_PER_PAGE < startArray.length

  const handleChangePage = (type: string) => {
    if (type === 'prev') { count = count - ITEM_PER_PAGE }
    else { count = count + ITEM_PER_PAGE };
    setCountKeeper(count)

    firstSlice = 0 + count
    secondSlice = ITEM_PER_PAGE + count
    const newArray = startArray?.slice(firstSlice, secondSlice)
    paginFunk(newArray)
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;