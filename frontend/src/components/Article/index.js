import React from "react";

import { useDispatch } from "react-redux";
import { addToCheckboxList, showView } from "../../redux/actions";

import DateParse from "../../utils/ParseDate";

import { Container } from "./styles";

export default function Article({ id, name, title, date, checkbox }) {
  const dispatch = useDispatch();
  const [selected, setSelected] = React.useState(false);

  function addArticleToList() {
    dispatch(addToCheckboxList(id));
    setSelected(!selected);
  }

  function addArticleToShow() {
    dispatch(showView(id));
  }

  return (
    <Container state={selected} checkbox={checkbox}>
      <input
        type="checkbox"
        name="checkbox-article"
        onChange={addArticleToList}
      />
      <button onClick={addArticleToShow}>
        <div>
          <p>{name}</p>
          <h1>{title}</h1>
          <p>{DateParse(date)}</p>
        </div>
      </button>
    </Container>
  );
}
