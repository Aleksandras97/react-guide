import { Fragment, useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";


const QuoteDetail = () => {
  const { quoteId } = useParams();
  const match = useRouteMatch();
  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId])

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="centered">{error}</div>;
  }

  if (!loadedQuote.text) {
    return <p className="centered">No Quote Found</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            Show Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`} exact>
        <div className="centered">
          <Link to={match.url} className="btn--flat">
            Hide Comments
          </Link>
        </div>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
