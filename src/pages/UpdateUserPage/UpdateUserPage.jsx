import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/users/selectors';
import { useEffect, useState } from 'react';
import { fetchUser, updateUser } from '../../redux/users/operations';
import { useNavigate, useParams } from 'react-router-dom';

export const UpdateUserPage = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [user, setUser] = useState(currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);

  const handleChange = e => {
    setUser(prevUser => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateUser({ ...user }));
    navigate(`/users/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          onChange={handleChange}
          value={user.name}
          type="text"
          name="name"
        />
      </label>
      <label>
        Image
        <input
          onChange={handleChange}
          value={user.avatar}
          type="url"
          name="avatar"
        />
      </label>
      <label>
        Email
        <input
          onChange={handleChange}
          value={user.email}
          type="text"
          name="email"
        />
      </label>
      <label>
        Number
        <input
          onChange={handleChange}
          value={user.phone}
          type="tel"
          name="phone"
        />
      </label>
      <label>
        City
        <input
          onChange={handleChange}
          value={user.city}
          type="text"
          name="city"
        />
      </label>
      <button>Submit</button>
    </form>
  );
};
