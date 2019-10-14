import React from 'react';
import ReactDOM from 'react-dom';
import LargeNumber from 'large-number-jovy';
import '../../common/index';
import logo from './images/logo.png';
import './search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Text: null
    };
  }

  loadComponent() {
    import('./text.js').then(textModule => {
      this.setState({
        Text: textModule.default
      });
    });
  }

  render() {
    const { Text } = this.state;
    return (
      <div className='search-text'>
        {LargeNumber('999999', '1')}
        {Text ? <Text /> : null}
        搜索文字的内容
        <img src={logo} alt='logo' />
        <button type='button' onClick={this.loadComponent.bind(this)}>
          load component
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById('root'));
