import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styling from "./HomePage.module.css";
import { CartContext } from "../Context/CardContext";

function HomePage() {
  const [myData, setMyData] = useState([]);
  const [total, handleChangeOfCount, totalprice, handleTotalPrice] = useContext(
    CartContext
  );

  const handleFetching = () => {
    return axios.get("https://eval2data.herokuapp.com/products");
  };

  useEffect(() => {
    handleFetching().then((res) => {
      setMyData(res.data);
      // console.log(res.data)
    });
  }, [total]);
  // console.log(myData);

  return (
    <>
      <h1>All Products</h1>
      <h2>
        Cart : {total} Totel Price : ₹{Math.round(totalprice)}
      </h2>
      <div className={styling.home}>
        <br />
        {myData.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            country_of_origin={item.country_of_origin}
            image={item.image}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
