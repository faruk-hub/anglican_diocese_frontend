import "./App.css";
import styled from "styled-components";
import  MediaCard  from "./components/confarmation/comfar";
import { AccountBox } from "./components/accountBox";
// import { AccountBox } from "./components/accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <AccountBox/>
     {/* <MediaCard/> */}
   </AppContainer>
  );
}

export default App;
