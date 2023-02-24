import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import { FilterWrapper } from './Filter.styled';

const Filter = () => {
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <FilterWrapper>
      <label>Find contacts by name</label>
      <input
        name="filter"
        value={filterValue}
        onChange={handleFilter}
        placeholder="Find contacts by name"
      />
    </FilterWrapper>
  );
};

export default Filter;
