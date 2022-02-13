class FizzBuzz extends React.Component {
  constructor() {
    super();
    this.state = {
      //count: 1,
      fizzBuzz: ''
    }
  }
  
  render() {
   // mise en place du contenu a l'aide du html5 
  
    /*return (
      <div>
        <h2>{this.state.fizzBuzz || this.state.count}</h2>
        <div className="btn-group">
          <button
            onClick={this._decrement.bind(this)}
            <i className="fa fa-minus"></i>
          </button>
          <button
            onClick={this._increment.bind(this)}
            className="btn btn-lg btn-primary">
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
    );*/
  }
  
  _fizzBuzz(num) 
  {
    for (int i = 1; i <= num; i++) 
    {
      if (i % 15 === 0) {
        this.setState({fizzBuzz: 'FizzBuzz'});
      } else if (i % 5 === 0) {
        this.setState({fizzBuzz: 'Buzz'});
      } else if (i % 3 === 0) {
        this.setState({fizzBuzz: 'Fizz'});
      } else {
        this.setState({fizzBuzz: ''});
      }
    }
  }
   // fonction permettant de décrementer en appuyant sur le boutton (-)
 /* _decrement() {
    if (this.state.count > 1) {
      this.setState({count: --this.state.count});
      this._fizzBuzz(this.state.count);
    }
  }
   // fonction permettant de d'incrementer en appuyant sur le boutton (+)
  _increment() {
    if (this.state.count < 100) {
      this.setState({count: ++this.state.count});
      this._fizzBuzz(this.state.count);
    }
  }
  */
}

//ReactDOM.render(<FizzBuzz />, document.getElementById('app'));