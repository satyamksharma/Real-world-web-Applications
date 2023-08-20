import styled from "styled-components";

const H1 = styled.h1`
font-size:30px;
font-weight: 600;
`
const Button = styled.button`
  font-size:1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: violet;
  color: white;
  cursor: pointer;
  margin: 20px;
`

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2 rem;
`

const StyledApp = styled.main`
  background-color: orange;
  padding: 20px;
`


function App() {
    return <StyledApp>
      <H1>Leafy Lodgings</H1>
      <Button> Check In </Button>
      <Button> Check In </Button>

      <Input type='number' placeholder='Number of Guests' />
    </StyledApp>;
}

export default App;
