import "./infinite-scroll.css";
import ListItem from "./list-item";

const InfiniteScroll = () => {
  return (
    <div className="container">
      {Array.from({ length: 20 }).map((_, index) => (
        <ListItem key={index} index={index} />
      ))}
    </div>
  );
};

export default InfiniteScroll;
