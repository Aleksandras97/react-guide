import QuoteFrom from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const onADdQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };

  return (
    <div>
      <QuoteFrom onAddQuote={onADdQuoteHandler} />
    </div>
  );
};

export default NewQuote;
