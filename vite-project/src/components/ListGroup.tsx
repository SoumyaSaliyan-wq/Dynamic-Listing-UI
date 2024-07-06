import { MouseEvent, ReactNode, useState } from "react";
import Alert from "./Alert";

type countyr = {
  name: string;
  code: string;
  emoji: string;
  unicode: string;
  image: string;
};

interface Props {
  items: countyr[];
  heading: string;
  onSelectedItem: (item: string) => void;
  children?:ReactNode
}
function ListGroup({ items, heading, onSelectedItem,children }: Props) {
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };
  const [showAlert,HideAlert]=useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1); //initializing selected index to -1(no active element)
  //useState is an array with 2 items first one is a var and second one is a function to update the car
  return (
    //Fragment to wrap multiple elements
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
            
          <li
            className={
              index == selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item.code}
            onClick={() => {
              handleClick(index), onSelectedItem(item.name),HideAlert(true)
            }}
            role="listItem"
          >
            <img
              src={item.image}
              alt="Girl in a jacket"
              width="50"
              height="60"
            ></img>
             {item.name}
             {index==selectedIndex && <Alert visible={true}><h4>{item.name}</h4>{item.code}</Alert>}
          </li>
        ))}
        {children}
       
      </ul>
    </>
  );
}
export default ListGroup;
