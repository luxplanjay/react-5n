import { RecipeList } from './RecipeList/RecipeList';
import { PaymentWidget } from './PaymentWidget/PaymentWidget';
import recipes from '../recipes.json';

export const App = () => {
  return (
    <>
      {/* <RecipeList recipes={recipes} /> */}
      {/* <hr /> */}
      <PaymentWidget />
    </>
  );
};
