import { Dog } from './Dog';
import { GlobalStyle } from './GlobalStyle';
import { BreedSelect } from './BreedSelect';
import { DogSkeleton } from './DogSkeleton';
import { ErrorMessage } from './ErrorMessage';
import { Layout } from './Layout';
import { fetchDogByBreed } from 'api';
import { errorMessages } from 'constants';
import { useState } from 'react';

export const App = () => {
  const [dog, setDog] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const selectBreed = async (breedId) => {
    try {
      setIsLoading(true);
      const dog = await fetchDogByBreed(breedId);
      setDog(dog);
    } catch {
      setError(errorMessages.fetchDog);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <BreedSelect onSelect={selectBreed} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {isLoading && <DogSkeleton />}
      {dog && !isLoading && <Dog dog={dog} />}
      <GlobalStyle />
    </Layout>
  );
};
