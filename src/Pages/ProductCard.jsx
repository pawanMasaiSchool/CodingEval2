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

  const handleCountChange = (val) => {
    setCount(count + val);
    handleChangeOfCount(count);
  };

  console.log(count);

  const [total, handleChangeOfCount] = useContext(CartContext);

  return (
    <div className={styling.Card}>
      <h3>{name}</h3>
      <h4>Origin : {country_of_origin}</h4>
      <img src={image} alt={name} style={{ width: "60px", height: "60px" }} />
      <div>
        <h4>Description:</h4> {description}
      </div>
      <h2>₹{price}</h2>
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
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
