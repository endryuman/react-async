import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/users/operations';
import { useNavigate } from 'react-router-dom';

export const Modal = ({ id, handleClouse }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    dispatch(deleteUser(id));
    navigate('/users');
  };

  return (
    <div>
      <p>Are you shure?</p>
      <ul>
        <li>
          <button onClick={handleDelete}>Yes</button>
        </li>
        <li>
          <button onClick={handleClouse}>No</button>
        </li>
      </ul>
    </div>
  );
};
