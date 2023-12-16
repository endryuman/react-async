import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentUser,
  selectIsLoading,
} from '../../redux/users/selectors';
import { useEffect, useState } from 'react';
import { fetchUser } from '../../redux/users/operations';
import { useParams } from 'react-router-dom';
import { Modal } from '../../components/Modal/Modal';

export const UserDetailsPage = () => {
  const user = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isModalShown, setIsModalShown] = useState(false);

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);
  const handleModal = () => setIsModalShown(true);

  const handleClouse = () => setIsModalShown(false);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {user && (
        <>
          <h2>{user.name}</h2>
          <img alt={user.name} src={user.avatar} />
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.city}</p>
          <button onClick={handleModal}>Delete User</button>
          {isModalShown && <Modal handleClouse={handleClouse} />}
        </>
      )}
    </>
  );
};
