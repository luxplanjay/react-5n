import { Component } from 'react';
import PropTypes from 'prop-types';
import { RecipeDifficulty } from 'components/RecipeDifficulty/RecipeDifficulty';
import { RecipeInfo } from 'components/RecipeInfo/RecipeInfo';
import { Title, Wrapper, Image } from './Recipe.styled';

export class Recipe extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    const {
      recipe: {
        name,
        time,
        servings,
        calories,
        difficulty,
        image = 'https://via.placeholder.com/340x200',
      },
    } = this.props;

    return (
      <Wrapper>
        <Image src={image} alt={name} onClick={this.toggle} />
        <Title>{name}</Title>
        {isOpen && (
          <>
            <RecipeInfo time={time} servings={servings} calories={calories} />
            <RecipeDifficulty difficulty={difficulty} />
          </>
        )}
      </Wrapper>
    );
  }
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
  }),
};
