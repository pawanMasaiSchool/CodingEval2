import { useContext, useState } from "react";
import styling from "./ProductCard.module.css";
import Button from "@mui/material/Button";
import { CartContext } from "../Context/CardContext";

function ProductCard({
  id,
  name,
  country_of_origin,
  image,
  description,
  price
}) {
  const [count, setCount] = useState(0);
  const [indiPrice, setIndiPrice] = useState(0);

  const handleCountChange = (val) => {
    if (count + val < 0) {
      setCount(0);
    } else {
      setCount(count + val);
      handleChangeOfCount(val);
    }
  };

  const hanldePrice = (rate) => {
    if (indiPrice + Number(rate) < 0) {
      setIndiPrice(0);
    } else {
      setIndiPrice(indiPrice + Number(rate));
      handleTotalPrice(Number(rate));
    }
  };

  // console.log(count);

  const [total, handleChangeOfCount, totalprice, handleTotalPrice] = useContext(
    CartContext
  );

  return (
    <div className={styling.Card}>
      <h3>{name}</h3>
      <h4>Origin : {country_of_origin}</h4>
      <img
        src={image}
        alt={name}
        style={{
          width: "60px",
          height: "60px",
          padding: "10px",
          border: "2px solid red"
        }}
      />
      <div>
        <h4>Description:</h4> {description}
      </div>
      <h2>Price : ₹{Math.round(price)}</h2>
      <h2>₹{Math.round(indiPrice)}</h2>
      <div>
        <Button
          style={{
            fontSize: "25px",
            padding: "0px",
            margin: "0px",
            height: "30px"
          }}
          variant="contained"
          onClick={() => {
            handleCountChange(-1);
            hanldePrice(-price);
          }}
        >
          -
        </Button>{" "}
        Quantity : {count}{" "}
        <Button
          variant="contained"
          style={{
            fontSize: "25px",
            padding: "0px",
            margin: "0px",
            height: "30px"
          }}
          onClick={() => {
            handleCountChange(+1);
            hanldePrice(price);
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
