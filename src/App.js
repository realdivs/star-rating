import "./styles.css";
import { StarRating } from "./StarRating";

export default function App() {
  return (
    <div className="App">
      <h1>Star Rating Component</h1>
      <h2>Rate This Product</h2>
      <StarRating totalStars={5} />
    </div>
  );
}
