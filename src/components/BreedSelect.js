import { useEffect, useMemo, useState } from 'react';
import Select from 'react-select';
import { fetchBreeds } from 'api';
import { ErrorMessage } from './ErrorMessage';
import { errorMessages } from 'constants';

export const BreedSelect = ({ onSelect }) => {
  const [breeds, setBreeds] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    (async function getBreeds() {
      try {
        setisLoading(true);
        const breeds = await fetchBreeds();
        setBreeds(breeds);
      } catch {
        setError(errorMessages.fetchBreeds);
      } finally {
        setisLoading(false);
      }
    })();
  }, []);

  const options = useMemo(() => {
    return breeds.map((breed) => ({
      value: breed.id,
      label: breed.name,
    }));
  }, [breeds]);

  return (
    <div>
      <Select
        options={options}
        isLoading={isLoading}
        onChange={(option) => onSelect(option.value)}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};
