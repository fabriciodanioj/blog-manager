import React from "react";
import Select from "react-select";

import api from "../../services/api";

import { useSelector, useDispatch } from "react-redux";
import { setCategories } from "../../redux/actions";

import { Container } from "./styles";

export default function NewArticle() {
  const [content, setContent] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [img, setImg] = React.useState("");
  const [category, setCategory] = React.useState();

  const data = useSelector(state => state.CategoryOptions);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/category");
      response.data.map(opt => {
        return dispatch(setCategories(opt));
      });
    };

    fetchData();
  }, [dispatch]);

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await api.post("/post", {
      title,
      content,
      author: "Fabricio Dani",
      img,
      categories: category
    });

    console.log(response);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Criar artigo</label>
        <input
          type="text"
          onChange={e => {
            setTitle(e.target.value);
          }}
          placeholder="Título do Artigo"
        />
        <input
          type="text"
          onChange={e => {
            setImg(e.target.value);
          }}
          placeholder="URL de imagem"
        />
        <Select
          isMulti
          name="categories"
          placeholder="Escolha categorias..."
          options={data}
          onChange={e => {
            if (e) {
              const id = e.map(item => item["value"]);
              setCategory(id);
            }
          }}
          className="multi-select"
          classNamePrefix="select"
        />
        <textarea
          type="text"
          onChange={e => {
            setContent(e.target.value);
          }}
          className="text-input"
        />
        <button>Criar Artigo</button>
      </form>
    </Container>
  );
}
