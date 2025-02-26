
// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { useNavigate, useLocation } from 'react-router-dom';
// import readData from './ReadLatestData';
// import readLatestData from './ReadLatestData';

// const PinContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background: #e0e0e0;
// `;

// const Form = styled.form`
//   width: 300px;
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
//   border: 1px solid ${props => (props.error ? 'red' : '#ccc')};
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

// const PinPage = () => {
//   const [otpInput, setOtpInput] = useState('');
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { cardNumber } = location.state || {};
//   const [lat1, setLatitude] = useState('');
//   const [long1, setLongitude] = useState('');
//   const [lat2, setLatitude1] = useState('');
//   const [long2, setLongitude2] = useState('');
//   const [otp, setOtp] = useState('');
//   const { state } = location;
//   const getOtp = state ? state.otp : 'No OTP received';

//   useEffect(() => {
//     const fetchData = async () => {
//       const dataFromFirebase = await readData();
//       setLatitude1(dataFromFirebase.latitude);
//       setLongitude2(dataFromFirebase.longitude);
//     };
//     const fetchOtp = async () => {
//       const fetchedOtp = await readLatestData();
//       setOtp(fetchedOtp);
//     };
//     fetchOtp();
//     fetchData();
//     fetchGeolocation();
//   }, []);

//   const fetchGeolocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         setLatitude(position.coords.latitude);
//         setLongitude(position.coords.longitude);
//       });
//     } else {
//       alert('Geolocation is not supported by this browser.');
//     }
//   };

//   const distance = (lat1, lon1, lat2, lon2) => {
//     lon1 = lon1 * Math.PI / 180;
//     lon2 = lon2 * Math.PI / 180;
//     lat1 = lat1 * Math.PI / 180;
//     lat2 = lat2 * Math.PI / 180;
//     const dlon = lon2 - lon1;
//     const dlat = lat2 - lat1;
//     const a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
//     const c = 2 * Math.asin(Math.sqrt(a));
//     const r = 6371;
//     return c * r;
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!otpInput) newErrors.otpInput = 'OTP is required';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       const dist = distance(lat1, long1, lat2, long2);
//       const isSuccess = dist <= 1 && Number(otpInput) === Number(getOtp);
//       console.log("Get OTP: ", getOtp)
//       alert(`Fetched OTP: ${getOtp}\nEntered OTP: ${otpInput}\nDistance: ${dist.toFixed(2)} km`);
//       navigate('/result', { state: { isSuccess, cardNumber } });
//     }
//   };

//   return (
//     <PinContainer>
//       <Form onSubmit={handleSubmit}>
//         <Input
//           type="text"
//           placeholder="Enter OTP"
//           value={otpInput}
//           onChange={(e) => setOtpInput(e.target.value)}
//           error={errors.otpInput}
//         />
//         {errors.otpInput && <ErrorMessage>{errors.otpInput}</ErrorMessage>}
//         <Button type="submit">Submit</Button>
//       </Form>
//     </PinContainer>
//   );
// };

// export default PinPage;



import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import readData from './ReadLatestData';
import readLatestData from './ReadLatestData';

// Enhanced styled components
const PinContainer = styled.div`
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

const OtpIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  box-shadow: 0 10px 25px rgba(103, 110, 234, 0.2);
  
  svg {
    width: 40px;
    height: 40px;
    fill: white;
  }
`;

const Form = styled.form`
  width: 350px;
  padding: 30px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FormDescription = styled.p`
  text-align: center;
  color: #64748b;
  margin-bottom: 25px;
  font-size: 0.95rem;
  line-height: 1.5;
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
  font-size: 1.2rem;
  letter-spacing: 3px;
  text-align: center;
  font-weight: 600;
  transition: all 0.2s ease;
  outline: none;
  box-sizing: border-box;
  
  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
  
  &::placeholder {
    color: #cbd5e1;
    letter-spacing: normal;
    font-weight: normal;
  }
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 0.8rem;
  margin-top: 5px;
  margin-bottom: 0;
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

const LoadingIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  color: #64748b;
  font-size: 0.9rem;
  
  svg {
    margin-right: 8px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// OTP Input component with individual boxes
const OtpInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
`;

const DigitInput = styled.input`
  width: 60px;
  height: 60px;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 8px;
  border: 2px solid ${(props) => (props.error ? '#ef4444' : '#e2e8f0')};
  outline: none;
  transition: all 0.2s ease;
  
  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`;

const PinPage = () => {
  const [otpInput, setOtpInput] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { cardNumber } = location.state || {};
  const [lat1, setLatitude] = useState('');
  const [long1, setLongitude] = useState('');
  const [lat2, setLatitude1] = useState('');
  const [long2, setLongitude2] = useState('');
  const [otp, setOtp] = useState('');
  const { state } = location;
  const getOtp = state ? state.otp : 'No OTP received';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataFromFirebase = await readData();
        setLatitude1(dataFromFirebase.latitude);
        setLongitude2(dataFromFirebase.longitude);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching location data:", error);
        setLoading(false);
      }
    };

    const fetchOtp = async () => {
      try {
        const fetchedOtp = await readLatestData();
        setOtp(fetchedOtp);
      } catch (error) {
        console.error("Error fetching OTP:", error);
      }
    };

    fetchOtp();
    fetchData();
    fetchGeolocation();
  }, []);

  const fetchGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Geolocation error:", error);
          setLoading(false);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  };

  const distance = (lat1, lon1, lat2, lon2) => {
    lon1 = lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;
    const dlon = lon2 - lon1;
    const dlat = lat2 - lat1;
    const a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
    const c = 2 * Math.asin(Math.sqrt(a));
    const r = 6371;
    return c * r;
  };

  const validate = () => {
    const newErrors = {};
    if (!otpInput) newErrors.otpInput = 'OTP is required';
    return newErrors;
  };

  const handleInputChange = (e) => {
    // Only allow digits
    const value = e.target.value.replace(/\D/g, '');
    // Limit to 4 digits
    setOtpInput(value.substring(0, 4));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const dist = distance(lat1, long1, lat2, long2);
      const isSuccess = dist <= 50 && Number(otpInput) === Number(getOtp);
      console.log("Get OTP: ", getOtp);
      alert(`Fetched OTP: ${getOtp}\nEntered OTP: ${otpInput}\nDistance: ${dist.toFixed(2)} km`);
      navigate('/result', { state: { isSuccess, cardNumber } });
    }
  };

  return (
    <PinContainer>
      <PageTitle>Verification Required</PageTitle>
      
      <OtpIcon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      </OtpIcon>
      
      <Form onSubmit={handleSubmit}>
        <FormDescription>
          We've sent a 4-digit code to your registered mobile number. 
          Please enter it below to verify your payment.
        </FormDescription>
        
        {loading ? (
          <LoadingIndicator>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Verifying your location...
          </LoadingIndicator>
        ) : (
          <>
            <FormGroup>
              <Label htmlFor="otpInput">Enter verification code</Label>
              <Input
                id="otpInput"
                type="text"
                placeholder="Enter 4-digit code"
                value={otpInput}
                onChange={handleInputChange}
                error={errors.otpInput}
                maxLength={4}
              />
              {errors.otpInput && <ErrorMessage>{errors.otpInput}</ErrorMessage>}
            </FormGroup>
            
            <Button type="submit">Verify & Continue</Button>
          </>
        )}
      </Form>
    </PinContainer>
  );
};

export default PinPage;