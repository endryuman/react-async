import { fetchUsers } from '../../redux/users/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectUsers, selectIsLoading } from '../../redux/users/selectors';
import { Link } from 'react-router-dom';

export const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchUsers(selectUsers));
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>
            <Link to={id}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
