import React from "react";

import { useDispatch } from "react-redux";
import { addToCheckboxList } from "../../redux/actions";

import { Container } from "./styles";

export default function Article({ id, name, title, date }) {
  const dispatch = useDispatch();

  function addArticleToList() {
    dispatch(addToCheckboxList(id));
  }

  return (
    <Container>
      <input
        type="checkbox"
        name="checkbox-article"
        onChange={addArticleToList}
      />
      <div>
        <p>{name}</p>
        <h1>{title}</h1>
        <p>{date}</p>
      </div>
    </Container>
  );
}
