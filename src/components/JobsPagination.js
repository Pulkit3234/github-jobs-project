import React from "react";
import {Pagination} from "react-bootstrap";

const JobsPagination = ({page, setPage, hasNextPage}) => {
// onPageChange or pageChangeHandler
    const pageChangeHandler = (newpage) => {
        setPage(newpage);

    };

    return (
        <Pagination>
            {page !== 1 && <Pagination.Prev onClick={() => pageChangeHandler(page-1)}/> }
            { page !== 1 && <Pagination.Item onClick={() => pageChangeHandler(page-1)} >{page-1}</Pagination.Item>}
            {page > 2 && <Pagination.Ellipsis onClick={() => pageChangeHandler(1)}/>}
            <Pagination.Item active>{page}</Pagination.Item>
            {hasNextPage && <Pagination.Item onClick={() => pageChangeHandler(page+1)}>{page+1}</Pagination.Item> }
            {hasNextPage && <Pagination.Next onClick={() => pageChangeHandler(page+1)}/>}

        </Pagination>

    );
};

export default JobsPagination;