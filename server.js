import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/products")
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h1>Ecommerce Store</h1>

      {products.map((p:any) => (
        <div key={p.id}>
          {p.name} - ${p.price}
        </div>
      ))}
    </div>
  );
}

export default App;
