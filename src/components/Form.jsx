import { useForm } from './FormProvider';

export const Form = ({ children }) => {
  const ctx = useForm();
  console.log(`form context value inside Form`, ctx);

  const handleSubmit = (e) => {
    e.preventDefault();
    ctx.handleSubmit('some form values');
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};
