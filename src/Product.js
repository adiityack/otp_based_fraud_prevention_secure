// // src/Product.js
// import React from 'react';
// import styled from 'styled-components';
// import { useSpring, animated } from 'react-spring';
// import { useNavigate } from 'react-router-dom';

// const ProductCard = styled(animated.div)`
//   width: 300px;
//   margin: 20px;
//   padding: 20px;
//   border-radius: 15px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   background: #fff;
//   text-align: center;
//   transition: transform 0.2s;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const ProductImage = styled.img`
//   width: 100%;
//   border-radius: 10px;
// `;

// const ProductName = styled.h2`
//   font-size: 1.5em;
//   margin: 10px 0;
// `;

// const ProductPrice = styled.p`
//   font-size: 1.2em;
//   color: #007BFF;
// `;

// const BuyButton = styled.button`
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   background: #007BFF;
//   color: #fff;
//   cursor: pointer;
//   transition: background 0.3s;

//   &:hover {
//     background: #0056b3;
//   }
// `;

// const Product = ({ product }) => {
//   const navigate = useNavigate();
//   const animation = useSpring({ opacity: 1, from: { opacity: 0 } });

//   const handleBuyNow = () => {
//     navigate('/payment');
//   };

//   return (
//     <ProductCard style={animation}>
//       <ProductImage src={product.image} alt={product.name} />
//       <ProductName>{product.name}</ProductName>
//       <ProductPrice>${product.price}</ProductPrice>
//       <BuyButton onClick={handleBuyNow}>Buy Now</BuyButton>
//     </ProductCard>
//   );
// };

// export default Product;

import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';

// Enhanced styling for the product card with gradient background and refined hover effects
const ProductCard = styled(animated.div)`
  width: 320px;
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  background: linear-gradient(145deg, #ffffff, #f8f8f8);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

// Enhanced product image with smooth hover scale effect
const ProductImage = styled.img`
  width: 100%;
  border-radius: 15px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

// Enhanced product name styling with increased font size and margin adjustments
const ProductName = styled.h2`
  font-size: 1.8em;
  margin: 15px 0 10px;
  color: #333;
`;

// Enhanced product price styling with a modern color scheme
const ProductPrice = styled.p`
  font-size: 1.4em;
  color: #ff6347; /* Tomato color for emphasis */
  margin-bottom: 15px;
`;

// Enhanced buy button with rounded corners, transition effects, and a hover scale effect
const BuyButton = styled.button`
  padding: 12px 25px;
  border: none;
  border-radius: 30px;
  background: #ff6347;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: #e5533d;
    transform: scale(1.05);
  }
`;

const Product = ({ product }) => {
  const navigate = useNavigate();
  const animation = useSpring({ opacity: 1, from: { opacity: 0 } });

  const handleBuyNow = () => {
    navigate('/payment');
  };

  return (
    <ProductCard style={animation}>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>${product.price}</ProductPrice>
      <BuyButton onClick={handleBuyNow}>Buy Now</BuyButton>
    </ProductCard>
  );
};

export default Product;

