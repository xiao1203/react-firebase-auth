// import { auth } from '../firebase';
import { firebaseApp } from '../firebase';
import { useState, useEffect } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const auth = getAuth(firebaseApp);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // useEffect(() => {
      //   if (user) {
      //     console.log('userの存在確認OK');
      //     navigate('/login');
      //     console.log('リダイレクトできてない？');
      //   }
      // }, []);
      // ...
    });
  };

  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={(event) => handleChangeEmail(event)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={(event) => handleChangePassword(event)}
          />
        </div>
        <div>
          <button>ログイン</button>
        </div>
        <div>
          ユーザ登録は<Link to={'/signup'}>こちら</Link>から
        </div>
      </form>
    </div>
  );
};

export default Login;
