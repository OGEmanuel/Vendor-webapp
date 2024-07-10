import { LoadingOverlay } from '@mantine/core';

import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export class AppOutlet extends React.Component<
  object,
  { error: null | undefined | boolean | any }
> {
  state = { error: null };

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error,
    });
  }

  render() {
    return (
      <Suspense fallback={<LoadingOverlay visible />}>
        {this.state.error ? <div>Something went wrong</div> : <Outlet />}
      </Suspense>
    );
  }
}
