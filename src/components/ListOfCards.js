import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class ListOfCards extends React.Component {
  render() {
    const { saved } = this.props;
    return (
      <div>
        {saved.map((savedCards, index) => {
          const {
            name,
            description,
            attr1,
            attr2,
            attr3,
            image,
            rare,
            trunfo,
          } = savedCards;
          return (
            <Card
              cardName={ name }
              cardDescription={ description }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardImage={ image }
              cardRare={ rare }
              cardTrunfo={ trunfo }
              key={ index }
              // hasTrunfo={ hasTrunfo }
            />
          );
        })}
      </div>
    );
  }
}

ListOfCards.propTypes = {
  saved: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListOfCards;
