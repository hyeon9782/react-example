type Car = {
  carClassId: string;
  carClassName: string;
  carModel: string;
};

type Props = {
  car: Car;
};

const CarItem = ({ car }: Props) => {
  return (
    <article>
      <img src={car.image} alt="car" />
      <div></div>
    </article>
  );
};

export default CarItem;
