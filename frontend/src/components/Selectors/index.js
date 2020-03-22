import React from "react";

import { Container } from "./styles";

import api from "../../services/api";

import { useSelector, useDispatch } from "react-redux";

import { resetState } from "../../redux/actions";

export default function Selectors(trash) {
  const data = useSelector(state => state.ArticleSelectedList);
  const count = data.length;
  const dispatch = useDispatch();

  const handleExclude = () => {
    if (trash.trash === true) {
      data.map(async article => await api.delete(`post/${article}`));
      return dispatch(resetState());
    }
    if (trash.trash === false) {
      data.map(
        async article =>
          await api.put(`post/${article}`, {
            active: false
          })
      );
      return dispatch(resetState());
    }
  };

  return (
    <Container>
      {<p>{count} artigo(s) selecionado(s)</p>}
      <div>
        <i class="material-icons">edit</i>
        <button onClick={handleExclude}>
          <i class="material-icons">delete</i>
        </button>
      </div>
    </Container>
  );
}
