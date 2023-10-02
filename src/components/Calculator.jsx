import { add, subtract, multiply, divide } from "../calculator";

const Calculator = () => {
  console.log(add);
  return (
    <div>
      <ul>
        <li>{add(2, 1)}</li>
        <li>{subtract(20, 14)}</li>
        <li>{multiply(5, 1)}</li>
        <li>{divide(5, 2)}</li>
      </ul>
    </div>
  );
};

export default Calculator;
