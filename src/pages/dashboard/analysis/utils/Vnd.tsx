import React from 'react';
import { vnd } from '../components/Charts';

export default class Vnd extends React.Component<{
  children: React.ReactText;
}> {
  main: HTMLSpanElement | undefined | null = null;

  componentDidMount() {
    this.renderToHtml();
  }

  componentDidUpdate() {
    this.renderToHtml();
  }

  renderToHtml = () => {
    const { children } = this.props;
    if (this.main) {
      this.main.innerHTML = vnd(children);
    }
  };

  render() {
    return (
      <span
        ref={(ref) => {
          this.main = ref;
        }}
      />
    );
  }
}
