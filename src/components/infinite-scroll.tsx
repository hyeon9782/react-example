import { useEffect, useRef, useState } from "react";
import "./infinite-scroll.css";
import ListItem from "./list-item";

const InfiniteScroll = () => {
  const ref = useRef(null);
  const [data, setData] = useState(Array.from({ length: 10 }));
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setData((prevData) => [...prevData, ...Array.from({ length: 10 })]);
  }, [page]);

  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const observer = new IntersectionObserver(handleIntersect, {
    root: null,
    rootMargin: "200px",
    threshold: 0.5,
  });

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.unobserve(ref.current);
  }, [ref]);

  return (
    <div className="container">
      {data.map((_, index) => (
        <ListItem key={index} index={index} />
      ))}
      <div ref={ref}></div>
    </div>
  );
};

export default InfiniteScroll;
