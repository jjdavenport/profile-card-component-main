import Footer from "./components/footer";
import Card from "./components/card";
import Wrapper from "./components/wrapper";
import Container from "./components/container";

function App() {
  return (
    <>
      <Wrapper>
        <Container>
          <Card />
        </Container>
        <Footer />
      </Wrapper>
    </>
  );
}

export default App;
