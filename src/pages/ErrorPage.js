import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <p><i>{error.statusText || error.message}</i></p>
        </div>
    );
};

export default ErrorPage;