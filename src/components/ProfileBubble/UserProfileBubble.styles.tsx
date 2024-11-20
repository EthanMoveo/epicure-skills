import styled from 'styled-components';

export const ProfileBubble = styled.div`
font-family: 'Helvetica Neue';
width: 24px;
height: 24px;
border-radius: 50%;
background-color: #3AAFB9;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-size: 12px; 
font-weight: bold;
text-transform: uppercase;
cursor: pointer;

@media (min-width: 1440px) {
  width: 30px; 
  height: 30px;
  font-size: 14px; 
  margin: 11px 0; 
}
`;