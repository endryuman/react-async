export const Modal = ({ handleClouse }) => {
  return (
    <div>
      <p>Are you shure?</p>
      <ul>
        <li>
          <button>Yes</button>
        </li>
        <li>
          <button onClick={handleClouse}>No</button>
        </li>
      </ul>
    </div>
  );
};
