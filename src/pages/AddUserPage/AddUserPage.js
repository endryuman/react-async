import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/users/operations';
import { useNavigate } from 'react-router-dom';

export const AddUserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const formElements = e.target.elements;
    const user = {
      name: formElements.name.value,
      image: formElements.image.value,
      email: formElements.email.value,
      number: formElements.number.value,
      city: formElements.city.value,
    };

    const addedUser = await dispatch(addUser(user)).unwrap();
    navigate(`/users/${addedUser.id}`);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Image
        <input type="url" name="image" />
      </label>
      <label>
        Email
        <input type="text" name="email" />
      </label>
      <label>
        Number
        <input type="tel" name="number" />
      </label>
      <label>
        City
        <input type="text" name="city" />
      </label>
      <button>Submit</button>
    </form>
  );
};
