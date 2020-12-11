import React, {useRef, useState} from 'react';
import CreateUser from "./CreateUser";
import UserList from "./userList";

function App() {
  //두개이상의 인풋을 관리할 떄는 유즈스테이트를 두번 사용하는 것이 아니라 객체 형태로 변형시킴
  const [inputs, setInputs ] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;

  const onChange = (e) => {
    const {name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value
      // name 은 각각의 username 과 이메일  value 는 인풋에서 던저주는 사용자가 적는 값
    });
  };

  // 먼저 만들어진 배열
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'dd',
      email: 'dfsf@ddd.com',
      active: true,
    },
    {
      id: 2,
      username: 'dd1',
      email: 'dfsf@ddd.com',
      active: false,
    },
    {
      id: 3,
      username: 'dd2',
      email: 'dfsf@ddd.com',
      active: false,
    },
  ]);

  const nextid = useRef(4); //초기 항목이 3개까 존재함으로 그 담 생셩될 id는 4부터

  const onCreate = () => {
    const user = {
      id: nextid.current,
      username,
      email,
    }
    setUsers([...users, user]); //불변성을 지켜줘야함으로 users의 배열 + 신규 user

    setInputs({
      username: '',
      email: '',
    })
    nextid.current += 1;
  }
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
        ? { ...user, active: !user.active } //새로운객체를 만들어서 기존 ...user의 불변성을 유지하면서 추가한다.
        : user
      )
    );
  };
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  )
}

export default App;
