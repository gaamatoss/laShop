import React, { useContext } from 'react';
import Login from '../../components/login';
import { getUser } from '../../api';
import { login } from '../../auth';
import { AuthContext } from '../../context/auth';

const Logar = (props) => {
  const [, setAuth] = useContext(AuthContext);
  const sendUser = async (user) => {
    const { data: response } = await getUser(user);
    login(response);
    setAuth(response);
    props.history.push('/shop');
  };
  return (
    <div className="container">
      <Login onClickButton={sendUser} />
    </div>
  );
};

export default Logar;

