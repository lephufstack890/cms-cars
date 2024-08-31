import { FC } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { Link } from 'react-router-dom';

const ErrorFallback: FC<FallbackProps> = ({ error }) => {
  return (
    <div role="alert">
      <p>Error Fallback Something went wrong:</p>
      <pre>{error.message}</pre>
      <Link className="btn btn-lg btn-primary fw-bolder" to="/">
        Go to homepage
      </Link>
    </div>
  );
};

export { ErrorFallback };
