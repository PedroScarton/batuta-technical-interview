import React from 'react';

import PropTypes from 'prop-types';

import ErrorHandlerComponent from '@shared/../ErrorHandlerComponent';

import ErrorBoundary from '../suspense/errorBoundary';
import SuspenseSpinner from '../suspense/suspenseSpinner';

const MainContainer = ({ children, style, classname, errorFallback }) => {
  return (
    <ErrorHandlerComponent fallback={errorFallback}>
      <div
        className={`max-h-[calc(100dvh - 3.5rem)] relative flex h-full max-h-[calc(100vh-3.5rem)] flex-1 flex-col gap-4 overflow-y-auto p-8 @container/main [&>*]:shrink-0 ${classname}`}
        style={style}
      >
        <SuspenseSpinner contained>
          {React.Children.map(children, child => (
            <ErrorBoundary key={child} resetKeys={[child]}>
              {child}
            </ErrorBoundary>
          ))}
        </SuspenseSpinner>
      </div>
    </ErrorHandlerComponent>
  );
};

MainContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default MainContainer;
