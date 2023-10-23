/* eslint-disable react/prop-types */
const UserContainer = ({ user, logout, login }) => {
  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>Hello There, {user?.name.toUpperCase()}</p>

          <button className='btn' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <button className='btn' onClick={login}>
          login
        </button>
      )}
    </div>
  );
};

export default UserContainer;
