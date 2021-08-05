import React, { useEffect } from 'react';
import { MemoryRouter, Route } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../../../redux/actions/searchAction';

export default function PaginationRange({ keyword }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const searchState = useSelector((state) => state.searchReducer);

  const actionButton = (path) => {
    // dispatch(searchAction(keyword));
    dispatch(searchAction(keyword, path));
    history.push(`/products?src=${keyword}&page=${path}`, keyword);
  };

  return (
    <MemoryRouter initialEntries={['/products']} initialIndex={0}>
      <Route>
        {({ location }) => {
          const query = new URLSearchParams(location.search);
          const page = parseInt(query.get('page') || '1', 10);
          return (
            <Pagination
              page={page}
              count={searchState?.result?.meta?.totalPage}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/products${
                    item.page === 1 ? '' : `?page=${item.page}`
                  }&src=${keyword}`}
                  {...item}
                  onClick={() => actionButton(item.page)}
                />
              )}
            />
          );
        }}
      </Route>
    </MemoryRouter>
  );
}
