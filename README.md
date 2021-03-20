# Elevação de estados

Este repositório visa mostrar diferentes comportamentos possíveis para componentes que lidem com lista.

Casos a serem abordados:

## 1
- Ao clicar em um item da lista, este item será ativado.
- O que quero dizer com 'ativado', é que ele será selecionado. Sabe quando temos uns itens com checkbox e queremos marcar ele? Então, ao marcar ele, digamos aqui, que ele estaria ativo.
- A ideia deste primeiro caso, é podermos ativar quantos itens da lista quisermos. Por exemplo, marcar o checkbox de quantos itens desejarmos.
- Para ver este exemplo rodando, veja o commit - Ativar quantos cards quiser
- Código:

```javascript
import 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
coloca markdown.to_html

import React, { useState } from "react";

import UserCard from "./Card";
import "../styles.css";

// fake api
import data from "../data.js";

const UserList = () => {
  const [showDetails, setShowDetails] = useState([]);

  function toggleShowMore(email) {
    if (showDetails.length > 0) {
      if (showDetails.find((item) => item === email) === undefined) {
        setShowDetails([...showDetails, email]);
      } else {
        const newEmailsList = showDetails.filter((item) => item !== email);
        setShowDetails(newEmailsList);
      }
    } else {
      setShowDetails([...showDetails, email]);
    }
  }

  return (
    <>
      <ul className="list">
        {data.results.map((user) => (
          <li className="list-item" key={user.email}>
            <UserCard
              user={user}
              showDetails={showDetails}
              onClickViewMore={() => toggleShowMore(user.email)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;

```

``` javascript
import 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
coloca markdown.to_html

import React from "react";

const UserCard = ({ user, showDetails, onClickViewMore }) => {
  return (
    <div>
      <div>
        <img src={user.picture.thumbnail} alt={user.name.first} />
        <span>
          {user.name.title} {user.name.first} {user.name.last}{" "}
        </span>

        <button onClick={onClickViewMore}>
          {showDetails.includes(user.email) ? "Ver menos" : "Ver mais"}
        </button>
      </div>
      {showDetails.includes(user.email) && (
        <div>
          <span>{user.phone}</span>
          <br />
          {user.dob.age} anos <br />
          {user.email}
        </div>
      )}
    </div>
  );
};

export default UserCard;

```


## 2
- Ao clicar em um item da lista, este será ativado e desativará outro. Ou seja, apenas um item ficará ativo. Isso acontece em casos onde há algumas opções de checkbox, e apenas uma opção pode ser escolhida. Por exemplo, uma pergunta que exige que seja marcado apenas uma alternativa.
- Para ver este exemplo rodando, veja o commit - List: mostrar detalhes de apenas um usuário por vez

``` javascript
import 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
coloca markdown.to_html

import React, { useEffect, useState } from "react";

import UserCard from "./Card";
import "../styles.css";

// fake api
import data from "../data.json";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [showDetails, setShowDetails] = useState("");
  const [userToShow, setUserToShow] = useState({});

  function toggleShowMore(email) {
    if (showDetails === email) {
      setShowDetails("");
    } else {
      setShowDetails(email);
    }
  }

  useEffect(() => {
    setUsers(data.results);
  }, []);

  if (!users) {
    return null;
  }

  return (
    <>
      <ul className="list">
        {users.map((user) => (
          <li className="list-item" key={user.email}>
            <UserCard
              user={user}
              showDetails={showDetails}
              onClickViewMore={() => toggleShowMore(user.email)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;

``` 

``` javascript
import 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
coloca markdown.to_html

import React, { useState } from "react";

const UserCard = ({ user, showDetails, onClickViewMore }) => {
  return (
    <div>
      <div>
        <img src={user.picture.thumbnail} alt={user.name.first} />
        <span>
          {user.name.title} {user.name.first} {user.name.last}{" "}
        </span>

        <button onClick={onClickViewMore}>
          {showDetails === user.email ? "Ver menos" : "Ver mais"}
        </button>
      </div>
      {showDetails === user.email && (
        <div>
          <span>{user.phone}</span>
          <br />
          {user.dob.age} anos <br />
          {user.email}
        </div>
      )}
    </div>
  );
};

export default UserCard;

``` 


## 3
- Ao clicar no botão 'desmarcar todos'/'marcar todos', faremos um toggle, ativando todos os itens da lista ou desativando todos eles.
- Para ver este exemplo rodando, veja o commit - Ativar ou desativar todos

``` javascript
import 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
coloca markdown.to_html

import React, { useState } from "react";

import UserCard from "./Card";
import "../styles.css";

// fake api
import data from "../data.js";

const UserList = () => {
  const [showDetails, setShowDetails] = useState(false);

  function toggleShowMore() {
    setShowDetails(!showDetails);
  }

  return (
    <>
      <ul className="list">
        {data.results.map((user) => (
          <li className="list-item" key={user.email}>
            <UserCard
              user={user}
              showDetails={showDetails}
              onClickViewMore={toggleShowMore}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;

```

``` javascript
import 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
coloca markdown.to_html

import React from "react";

const UserCard = ({ user, showDetails, onClickViewMore }) => {
  return (
    <div>
      <div>
        <img src={user.picture.thumbnail} alt={user.name.first} />
        <span>
          {user.name.title} {user.name.first} {user.name.last}{" "}
        </span>

        <button onClick={onClickViewMore}>
          {showDetails ? "Ver menos" : "Ver mais"}
        </button>
      </div>
      {showDetails && (
        <div>
          <span>{user.phone}</span>
          <br />
          {user.dob.age} anos <br />
          {user.email}
        </div>
      )}
    </div>
  );
};

export default UserCard;

```

