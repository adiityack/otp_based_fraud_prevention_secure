// // src/Result.js
// import React from 'react';
// import styled from 'styled-components';
// import { useLocation } from 'react-router-dom';

// const ResultContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background: #e0e0e0;
// `;

// const Message = styled.h1`
//   font-size: 2em;
//   color: #343a40;
//   margin-bottom: 20px;
// `;

// const Gif = styled.img`
//   width: 300px;
//   height: 300px;
//   border-radius: 10px;
// `;

// const Result = () => {
//   const location = useLocation();
//   const { isSuccess } = location.state;

//   return (
//     <ResultContainer>
//       <Message>{isSuccess ? 'Payment Successful!' : 'Payment Failed!'}</Message>
//       <Gif src={isSuccess ? '/success.gif' : '/failure.gif'} alt={isSuccess ? 'Success' : 'Failure'} />
//     </ResultContainer>
//   );
// };

// export default Result;


import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

// Enhanced styled components
const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`;

const ResultCard = styled.div`
  width: 450px;
  max-width: 90%;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ResultHeader = styled.div`
  width: 100%;
  padding: 30px 0;
  background: ${props => props.success 
    ? 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)' 
    : 'linear-gradient(135deg, #f5567b 0%, #fd8a5e 100%)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Message = styled.h1`
  font-size: 1.8em;
  color: white;
  margin: 0;
  text-align: center;
  font-weight: 600;
`;

const SubMessage = styled.p`
  font-size: 1em;
  color: white;
  opacity: 0.9;
  margin: 10px 0 0 0;
  text-align: center;
`;

const ResultBody = styled.div`
  padding: 30px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Gif = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ResultDetail = styled.div`
  width: 100%;
  background: ${props => props.success ? '#f0fff4' : '#fff5f5'};
  border-radius: 8px;
  padding: 15px;
  margin-top: 20px;
  border-left: 4px solid ${props => props.success ? '#68d391' : '#fc8181'};
`;

const DetailTitle = styled.h3`
  font-size: 1em;
  color: #4a5568;
  margin: 0 0 5px 0;
`;

const DetailText = styled.p`
  font-size: 0.9em;
  color: #718096;
  margin: 0;
  line-height: 1.5;
`;

const Button = styled.button`
  margin-top: 25px;
  padding: 12px 24px;
  background: ${props => props.success 
    ? 'linear-gradient(135deg, #34d399, #3b82f6)' 
    : 'linear-gradient(135deg, #6366f1, #8b5cf6)'};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px ${props => props.success 
    ? 'rgba(52, 211, 153, 0.2)' 
    : 'rgba(99, 102, 241, 0.2)'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px ${props => props.success 
      ? 'rgba(52, 211, 153, 0.25)' 
      : 'rgba(99, 102, 241, 0.25)'};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const Result = () => {
  const location = useLocation();
  const { isSuccess, cardNumber } = location.state || { isSuccess: false };
  
  // For simulating confetti on success
  useEffect(() => {
    if (isSuccess) {
      // In a real implementation, you could add a confetti animation library here
      console.log("Showing success animation");
    }
  }, [isSuccess]);
  
  // Get current date and time for transaction reference
  const now = new Date();
  const transactionId = `TXN${now.getTime().toString().slice(-8)}`;
  const transactionDate = now.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
  const transactionTime = now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  // Handle button click
  const handleButtonClick = () => {
    if (isSuccess) {
      window.location.href = '/';
    } else {
      window.history.back();
    }
  };

  return (
    <ResultContainer>
      <ResultCard>
        <ResultHeader success={isSuccess}>
          <IconContainer>
            {isSuccess ? (
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#10b981" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
              </svg>
            ) : (
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#ef4444" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
              </svg>
            )}
          </IconContainer>
          <Message>{isSuccess ? 'Payment Successful!' : 'Payment Failed!'}</Message>
          <SubMessage>
            {isSuccess 
              ? 'Your transaction has been processed successfully.' 
              : 'There was a problem processing your payment.'}
          </SubMessage>
        </ResultHeader>
        
        <ResultBody>
          <Gif 
            src={isSuccess ? '/success.gif' : '/failure.gif'} 
            alt={isSuccess ? 'Success' : 'Failure'} 
          />
          
          <ResultDetail success={isSuccess}>
            <DetailTitle>Transaction Details</DetailTitle>
            <DetailText>
              <strong>ID:</strong> {transactionId}<br />
              <strong>Date:</strong> {transactionDate}<br />
              <strong>Time:</strong> {transactionTime}<br />
              {cardNumber && <><strong>Card:</strong> •••• {cardNumber.slice(-4)}<br /></>}
              <strong>Status:</strong> {isSuccess ? 'Completed' : 'Failed'}
            </DetailText>
          </ResultDetail>
          
          <Button 
            success={isSuccess} 
            onClick={handleButtonClick}
          >
            {isSuccess ? 'Return to Home' : 'Try Again'}
          </Button>
        </ResultBody>
      </ResultCard>
    </ResultContainer>
  );
};

export default Result;

