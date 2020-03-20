export default function dataParseToString (d) {
  let options = {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  };
  const date = new Date(d).toLocaleDateString("pt-BR", options);
  return date;
}
