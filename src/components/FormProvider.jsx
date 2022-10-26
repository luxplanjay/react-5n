import { useState, useContext, createContext } from 'react';

const formContext = createContext();

export const useForm = () => useContext(formContext);

export const FormProvider = ({
  initialValues = {},
  handleSubmit,
  children,
}) => {
  const [state, setState] = useState(initialValues);

  const handleChange = (fieldName, value) => {
    setState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  return (
    <formContext.Provider
      value={{
        state,
        handleSubmit,
        handleChange,
      }}
    >
      {children}
    </formContext.Provider>
  );
};
