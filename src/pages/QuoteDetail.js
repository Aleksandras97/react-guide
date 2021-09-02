import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const { quoteId } = useParams();

  return (
    <Fragment>
      QuoteDetail - {quoteId}
      <Route path={`/quotes/${quoteId}/comments`} exact>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
