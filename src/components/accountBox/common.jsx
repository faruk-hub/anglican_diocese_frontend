import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  // height:100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
`;

export const Box = styled.div`
  width: 100%;
  font-size:14px;
  height:200vh;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // margin-top: 10px;
  margin-top:-14px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  // padding-top: -80px;
  // box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(241, 196, 15);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 14px;

  &::placeholder {
    // color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(244,120,81);
  background: linear-gradient(
    27deg,
     rgba(244,120,81,1) 36%,
     rgba(223,153,37,1) 97%);

  &:hover {
    filter: brightness(1.03);
  }
`;

export const Option = styled.option`
width: 100%;
height: 40px;
padding: 0px 10px;
font-size: 14px;
// background: rgb(83,70,36);
// color:#fffff;
// border: none;

`; 

export const Select = styled.select`
border:none;
border-bottom: 1px solid black;
`;
