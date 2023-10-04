import { MainSpace, ImageSpace, FormSpace } from "./styles";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <>
    <MainSpace>
      <ImageSpace />
      <FormSpace>
        <Form />
      </FormSpace>
    </MainSpace>
    <Footer />
    </>
  );
}

export default App;
