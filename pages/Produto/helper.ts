interface FilteredProduct {
  id: Number;
  nome: String;
}

const helper: FilteredProduct[] = [
  { id: 1, nome: "todos" },
  { id: 2, nome: "populares" },
  { id: 3, nome: "mesa" },
  { id: 4, nome: "armario" },
  { id: 5, nome: "sofa" },
];

export default helper;
