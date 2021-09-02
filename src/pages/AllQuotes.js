import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Ale", text: "Learning react" },
  { id: "q2", author: "Pal", text: "Learning cooking" },
  { id: "q3", author: "Max", text: "Learning bok" },
];

const AllQuotes = () => {
  return (
    <div>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  );
};

export default AllQuotes;
