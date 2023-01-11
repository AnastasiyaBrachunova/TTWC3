import React from "react";
import "./Pagination.css";

import nextArrow from "../../images/arrowright_1.png";
import previosArrow from "../../images/leftarrow_1.png";
import previosArrowDouble from "../../images/leftarrow_1241.png";
import nextArrowDouble from "../../images/arrowright_1240.png";

export const Pagination = (props) => {
  return (
    <div className="pagination-page__arrow-box">
      <span className="pagination-page__page-index">
        {props.pageIndex + 1} из {props.pageOptions.length}
      </span>

      <button
        className="pagination-page__button button"
        onClick={props.gotoPageBack}
        disabled={!props.canPreviousPage}
      >
        <img
          className="pagination-page__arrow"
          alt="Назад"
          src={previosArrowDouble}
        />
      </button>

      <button
        className="pagination-page__button button"
        onClick={props.previousPage}
        disabled={!props.canPreviousPage}
      >
        <img
          className="pagination-page__arrow"
          alt="Назад"
          src={previosArrow}
        />
      </button>
      <button
        className="pagination-page__button button"
        onClick={props.nextPage}
        disabled={!props.canNextPage}
      >
        <img className="pagination-page__arrow" alt="Вперед" src={nextArrow} />
      </button>

      <button
        className="pagination-page__button button"
        onClick={props.gotoPageNext}
        disabled={!props.canNextPage}
      >
        <img
          className="pagination-page__arrow"
          alt="Назад"
          src={nextArrowDouble}
        />
      </button>
    </div>
  );
};
