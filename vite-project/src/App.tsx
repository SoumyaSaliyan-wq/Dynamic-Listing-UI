import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import data from "./countries"
function App() {
  const items = ["New York", "England", "Sanfrancisco"];
  const handleSelectedItem = (item: string) => {
    console.log(item)
  };
  return (
    <div className="container">
      <ListGroup
        items={data}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      >
      </ListGroup>
      {/* <Alert>
        Hi There!
      </Alert> */}
      {/* <Button  text="primary">My Button</Button>
      <Button  text="secondary">My Button</Button> */}

    </div>
  );
}
export default App;
