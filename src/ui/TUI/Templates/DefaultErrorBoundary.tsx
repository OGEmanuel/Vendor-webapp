import React from 'react';

export class DefaultErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: null | undefined | boolean | any }
> {
  state: Readonly<{ error: null | undefined | boolean | any }> = {
    error: '',
  };

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo, ' error goes');
    this.setState({
      error,
    });
  }

  render() {
    return this.state.error ? <div>something went wrong</div> : this.props.children;
  }
}
