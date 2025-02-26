// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import storeData from './StoreData';

// const FormContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background: #e0e0e0;
// `;

// const Card = styled.div`
//   width: 400px;
//   height: 250px;
//   background: linear-gradient(135deg, #9b4dca, #d16ba5);
//   border-radius: 15px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   margin-bottom: 20px;
// `;

// const Form = styled.form`
//   width: 400px;
//   padding: 20px;
//   background: #fff;
//   border-radius: 15px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin-bottom: 15px;
//   border-radius: 5px;
//   border: 1px solid ${(props) => (props.error ? 'red' : '#ccc')};
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   background: linear-gradient(135deg, #5ea3ff, #65dfc9);
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 1.1em;

//   &:hover {
//     background: linear-gradient(135deg, #3e85ff, #3acb91);
//   }
// `;

// const ErrorMessage = styled.p`
//   color: red;
//   font-size: 0.9em;
// `;

// const PaymentForm = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [cardHolder, setCardHolder] = useState('');
//   const [expirationDate, setExpirationDate] = useState('');
//   const [ccv, setCcv] = useState('');
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const [newOtp, setOtp] = useState('');

//   const validate = () => {
//     const newErrors = {};
//     if (!cardNumber) newErrors.cardNumber = 'Card number is required';
//     if (!cardHolder) newErrors.cardHolder = 'Card holder is required';
//     if (!expirationDate) newErrors.expirationDate = 'Expiration date is required';
//     if (!ccv) newErrors.ccv = 'CCV is required';
//     return newErrors;
//   };

//   const generateOTP = () => {
//     // Generate a random number between 1000 and 9999
//     const otp = Math.floor(1000 + Math.random() * 9000);
//     setOtp(otp);
//     return otp;
//   };

//   const handleStoreOtp = (otp) => {
//     storeData(otp);
//   };

//   const sendMessage = async (message) => {
//     try {
//       const otp = generateOTP();
//       message = message + "****** LINK";
//       const response = await axios.post('http://localhost:8000/send-message', {
//         phoneNumber: '+91**********',
//         message,
//       });
//       handleStoreOtp(otp);
//       // alert('Message sent successfully!' + otp);
//       navigate('/pin', { state: { otp } });
//     } catch (error) {
//       if (error.response) {
//         console.error('Error sending message:', error.response.data);
//         alert(`Failed to send message: ${error.response.data.error}`);
//       } else {
//         console.error('Error sending message:', error.message);
//         alert('Failed to send message. Please try again.');
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       sendMessage('Hi');
//     }
//   };

//   return (
//     <FormContainer>
//       <Card />
//       <Form onSubmit={handleSubmit}>
//         <Input
//           type="text"
//           placeholder="Card Number"
//           value={cardNumber}
//           onChange={(e) => setCardNumber(e.target.value)}
//           error={errors.cardNumber}
//         />
//         {errors.cardNumber && <ErrorMessage>{errors.cardNumber}</ErrorMessage>}
//         <Input
//           type="text"
//           placeholder="Card Holder"
//           value={cardHolder}
//           onChange={(e) => setCardHolder(e.target.value)}
//           error={errors.cardHolder}
//         />
//         {errors.cardHolder && <ErrorMessage>{errors.cardHolder}</ErrorMessage>}
//         <Input
//           type="text"
//           placeholder="Expiration Date"
//           value={expirationDate}
//           onChange={(e) => setExpirationDate(e.target.value)}
//           error={errors.expirationDate}
//         />
//         {errors.expirationDate && <ErrorMessage>{errors.expirationDate}</ErrorMessage>}
//         <Input
//           type="text"
//           placeholder="CCV"
//           value={ccv}
//           onChange={(e) => setCcv(e.target.value)}
//           error={errors.ccv}
//         />
//         {errors.ccv && <ErrorMessage>{errors.ccv}</ErrorMessage>}
//         <Button type="submit">Submit</Button>
//       </Form>
//     </FormContainer>
//   );
// };

// export default PaymentForm;

import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import storeData from './StoreData';

// Enhanced styled components
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`;

const PageTitle = styled.h1`
  color: #334155;
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 1.8rem;
  text-align: center;
`;

const CardPreview = styled.div`
  width: 400px;
  height: 230px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(103, 110, 234, 0.2);
  margin-bottom: 30px;
  padding: 25px;
  position: relative;
  color: white;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  
  svg {
    height: 40px;
  }
`;

const CardChip = styled.div`
  width: 50px;
  height: 35px;
  background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  border-radius: 6px;
  margin-bottom: 20px;
`;

const CardNumber = styled.div`
  font-size: 1.4rem;
  letter-spacing: 3px;
  margin-bottom: 20px;
  font-family: monospace;
`;

const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
`;

const CardDetailItem = styled.div`
  display: flex;
  flex-direction: column;
  
  span:first-child {
    opacity: 0.7;
    margin-bottom: 5px;
    font-size: 0.7rem;
  }
`;

const Form = styled.form`
  width: 400px;
  padding: 30px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: #64748b;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: 8px;
  border: 2px solid ${(props) => (props.error ? '#ef4444' : '#e2e8f0')};
  font-size: 1rem;
  transition: all 0.2s ease;
  outline: none;
  box-sizing: border-box;
  
  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
  
  &::placeholder {
    color: #cbd5e1;
  }
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 0.8rem;
  margin-top: 5px;
  margin-bottom: 0;
`;

const InputRow = styled.div`
  display: flex;
  gap: 15px;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s ease;
  margin-top: 10px;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
  
  &:hover {
    background: linear-gradient(135deg, #4f46e5, #7c3aed);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(99, 102, 241, 0.25);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [ccv, setCcv] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const [newOtp, setOtp] = useState('');

  const formatCardNumber = (value) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, '');
    // Format with spaces every 4 digits
    const formatted = cleaned.replace(/(\d{4})(?=\d)/g, '$1 ');
    // Limit to 19 characters (16 digits + 3 spaces)
    return formatted.substring(0, 19);
  };

  const formatExpirationDate = (value) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, '');
    // Add slash after first two digits
    if (cleaned.length >= 3) {
      return `${cleaned.substring(0, 2)}/${cleaned.substring(2, 4)}`;
    }
    return cleaned;
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  const handleExpirationDateChange = (e) => {
    const formatted = formatExpirationDate(e.target.value);
    setExpirationDate(formatted);
  };

  const validate = () => {
    const newErrors = {};
    if (!cardNumber) newErrors.cardNumber = 'Card number is required';
    if (!cardHolder) newErrors.cardHolder = 'Card holder is required';
    if (!expirationDate) newErrors.expirationDate = 'Expiration date is required';
    if (!ccv) newErrors.ccv = 'CCV is required';
    return newErrors;
  };

  const generateOTP = () => {
    // Generate a random number between 1000 and 9999
    const otp = Math.floor(1000 + Math.random() * 9000);
    setOtp(otp);
    return otp;
  };

  const handleStoreOtp = (otp) => {
    storeData(otp);
  };

  const sendMessage = async (message) => {
    try {
      const otp = generateOTP();
      message = message + "https://otpadvance.netlify.app";
      const response = await axios.post('http://localhost:8000/send-message', {
        phoneNumber: '+917887241146',
        message,
      });
      handleStoreOtp(otp);
      // alert('Message sent successfully!' + otp);
      navigate('/pin', { state: { otp } });
    } catch (error) {
      if (error.response) {
        console.error('Error sending message:', error.response.data);
        alert(`Failed to send message: ${error.response.data.error}`);
      } else {
        console.error('Error sending message:', error.message);
        alert('Failed to send message. Please try again.');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      sendMessage('Hi');
    }
  };

  return (
    <FormContainer>
      <PageTitle>Secure Payment</PageTitle>
      
      <CardPreview>
        <CardLogo>
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z" fill="white" fillOpacity="0.2"/>
            <path d="M22 15L29 24L22 33" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17 15L24 24L17 33" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>PREMIUM</span>
        </CardLogo>
        
        <CardChip />
        
        <CardNumber>
          {cardNumber || '•••• •••• •••• ••••'}
        </CardNumber>
        
        <CardDetails>
          <CardDetailItem>
            <span>Card Holder</span>
            <span>{cardHolder || 'YOUR NAME'}</span>
          </CardDetailItem>
          <CardDetailItem>
            <span>Expires</span>
            <span>{expirationDate || 'MM/YY'}</span>
          </CardDetailItem>
        </CardDetails>
      </CardPreview>
      
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input
            id="cardNumber"
            type="text"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={handleCardNumberChange}
            error={errors.cardNumber}
            maxLength={19}
          />
          {errors.cardNumber && <ErrorMessage>{errors.cardNumber}</ErrorMessage>}
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="cardHolder">Card Holder</Label>
          <Input
            id="cardHolder"
            type="text"
            placeholder="John Doe"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            error={errors.cardHolder}
          />
          {errors.cardHolder && <ErrorMessage>{errors.cardHolder}</ErrorMessage>}
        </FormGroup>
        
        <InputRow>
          <FormGroup style={{ flex: 1 }}>
            <Label htmlFor="expirationDate">Expiration Date</Label>
            <Input
              id="expirationDate"
              type="text"
              placeholder="MM/YY"
              value={expirationDate}
              onChange={handleExpirationDateChange}
              error={errors.expirationDate}
              maxLength={5}
            />
            {errors.expirationDate && <ErrorMessage>{errors.expirationDate}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup style={{ flex: 1 }}>
            <Label htmlFor="ccv">CCV</Label>
            <Input
              id="ccv"
              type="text"
              placeholder="123"
              value={ccv}
              onChange={(e) => setCcv(e.target.value)}
              error={errors.ccv}
              maxLength={3}
            />
            {errors.ccv && <ErrorMessage>{errors.ccv}</ErrorMessage>}
          </FormGroup>
        </InputRow>
        
        <Button type="submit">Process Payment</Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentForm;