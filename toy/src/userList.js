import React, {useEffect} from 'react';

function User({ user, onRemove, onToggle }) {
  const { username, email, id , active } = user;
  useEffect(() => {
    console.log('dfsdfasdf');
    // 마운트 될떄
    // props > state
    // rest api
    // setTimeout
    //
    return () => {
      //언마운트 될 떄
      // 라이브러리 인스터스 제거 작업
      // clearInterval
      console.log('dfsdfasdf1111111');
    }
  }, [user]);
  //deps 디펜던시의 약자고 의존되는 값을 넣어준다.

  return(
    <div>
      <b style={{
        color: active ?  'green' : 'pink',
        cursor: 'pointer',
      }}
      onClick={
           () => onToggle(id)
         }
      >{username}</b><span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
      {/*버튼이 눌렸을 때는(시점) 함수를 호출할거야 */}
    </div>
  );
};

function UserList ({ users , onRemove, onToggle }) {
  return (
    <div>
      {
        users.map(
          (user) => (
            <User
              user={user}
              key={user.id}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          )
        )
      }
    </div>
  );
};

export default UserList;