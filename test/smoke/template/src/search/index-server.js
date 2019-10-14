
const React = require('react');
const LargeNumber = require('large-number-jovy');
const logo = require('./images/logo.png');
const s = require('./search.scss');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Text: null,
    };
  }

  loadComponent() {
    import('./text.js').then((textModule) => {
      this.setState({
        Text: textModule.default,
      });
    });
  }

  render() {
    const { Text } = this.state;
    return (
      <div className="search-text">
        {LargeNumber('999999', '1')}
        {Text ? <Text /> : null}
        搜索文字的内容
        <img src={logo} alt="logo" />
        <button type="button" onClick={this.loadComponent.bind(this)}>load component</button>
      </div>
    );
  }
}

module.exports = <Search />;
