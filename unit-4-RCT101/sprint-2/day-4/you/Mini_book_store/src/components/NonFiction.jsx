import BookCard from "./BookCard";
import nonfiction  from "../nonfiction.json;

export default function NonFiction() {
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'>Non-Fiction Books</h1>

      <div className="books-container">
    {nonfiction.map((el,i) =><BookCard key={i}{...el}/>
    )}
      </div>
    </div>
  );
}
