# Elevação de estados

Este repositório visa mostrar diferentes comportamentos possíveis para componentes que lidem com lista.

Casos a serem abordados:

## 1
- Ao clicar em um item da lista, este item será ativado.
- O que quero dizer com 'ativado', é que ele será selecionado. Sabe quando temos uns itens com checkbox e queremos marcar ele? Então, ao marcar ele, digamos aqui, que ele estaria ativo.
- A ideia deste primeiro caso, é podermos ativar quantos itens da lista quisermos. Por exemplo, marcar o checkbox de quantos itens desejarmos.
- Para ver este exemplo rodando, veja o commit -
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


## 2
- Ao clicar em um item da lista, este será ativado e desativará outro. Ou seja, apenas um item ficará ativo. Isso acontece em casos onde há algumas opções de checkbox, e apenas uma opção pode ser escolhida. Por exemplo, uma pergunta que exige que seja marcado apenas uma alternativa.
- Para ver este exemplo rodando, veja o commit - 


## 3
- Ao clicar no botão 'desmarcar todos'/'marcar todos', faremos um toggle, ativando todos os itens da lista ou desativando todos eles.
- Para ver este exemplo rodando, veja o commit - 

