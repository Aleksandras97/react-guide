import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import QuoteFrom from "../components/quotes/QuoteForm";
import useHttp from '../hooks/use-http'
import { addQuote } from '../lib/api'

const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote)

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes')
    }
  }, [status, history])

  const onAddQuoteHandler = (quoteData) => {
    sendRequest(quoteData)
    // console.log(quoteData);s
  };

  return (
    <div>
      <QuoteFrom isLoading={status === 'pending'} onAddQuote={onAddQuoteHandler} />
    </div>
  );
};

export default NewQuote;
