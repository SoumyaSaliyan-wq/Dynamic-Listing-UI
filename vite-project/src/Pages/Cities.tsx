import ListGroup from "../components/ListGroup";
import data from "../countries";
function Cities() {
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <ListGroup
        items={data}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      ></ListGroup>
    </>
  );
}
export default Cities;
