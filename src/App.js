import styled from "styled-components";
import AppRoutes from "./routes";



const AppContainer = styled.div`

  height: auto;
  width: 100%;
  position: relative;


`;



function App() {
  return (
    <AppContainer >
    
        <AppRoutes />
      
    </AppContainer>
  );
}

export default App;
