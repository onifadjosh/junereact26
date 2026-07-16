import axios from "axios";
import React, { useEffect, useState } from "react";

const MakeRequest = () => {
  const [name, setname] = useState("Josh");
  const [number, setnumber] = useState(0);
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    console.log("use effect ran");

    const fetchProducts = async () => {
      try {
        // const response = await fetch("https://dummyjson.com/products");
        const response = await axios.get("https://dummyjson.com/products")
        // const data = await response.json();
        console.log(response.data.products);

        console.log(response);
        // setproducts(data.products);
        setproducts(response.data.products)
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false)
      }
    };

    fetchProducts();
  }, []);

  //without dependency array use effect runs onload and when any state changes it runs again
  //when there is empty dependency array, use effect runs onload but when any state changes it won´t run
  //when there is dep array with a state, use effect runs onload and when that particular state changes use effect will run again

  return (
    <div>
      <h1 onClick={() => setname("Pamilerin")}>{name}</h1>

      <h1 onClick={() => setnumber(number + 1)}>{number}</h1>

      {loading ? (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="d-flex flex-wrap gap-2">
          {products.map((product, index) => (
            <div className="card" style={{ width: "18rem" }} key={product.id}>
              <img src={product.images[0]} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MakeRequest;
