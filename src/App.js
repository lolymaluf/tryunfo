import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      rare: '',
      cardTrunfo: true,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      carta: [],
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(() => ({ [name]: value }), this.validaBotao);
  }

  onSaveButtonClick = () => {
    /*     console.log('Salvou!'); */
    const { name, description, attr1, attr2, attr3, image,
      rare } = this.state;
    const cardObj = {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
    };
    this.setState(({ carta }) => ({ carta: [...carta, cardObj] }),
      () => {
        this.setState(() => ({
          name: '',
          description: '',
          image: '',
          rare: 'normal',
          attr1: 0,
          attr2: 0,
          attr3: 0,
        }));
      });
  }

  validaBotao = () => {
    const { name, description, attr1, attr2, attr3, image,
      rare } = this.state;
    let valida = true;
    if (Number(attr1 + attr2 + attr3 > '210')) valida = false;
    if (Number(attr1 > '90' || attr1 < 0)) valida = false;
    if (Number(attr2 > '90' || attr2 < 0)) valida = false;
    if (Number(attr3 > '90' || attr3 < 0)) valida = false;

    if (name && description && image && rare && valida) {
      this.setState(() => ({ isSaveButtonDisabled: false }));
    } else {
      this.setState(() => ({ isSaveButtonDisabled: true }));
    }
  };

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
