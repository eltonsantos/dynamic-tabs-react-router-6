import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const params = useParams();

  return (
    <div>
      <h1>Detalhe do produto #{params.id}</h1>
    </div>
  );
};
