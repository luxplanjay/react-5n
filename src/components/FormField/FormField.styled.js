import {
  Field as FormikField,
  ErrorMessage as FormikErrorMessage,
} from 'formik';
import styled from 'styled-components';

export const Wrapper = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Field = styled(FormikField)`
  padding: 4px;
  font: inherit;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: ${(p) => p.theme.colors.error};
`;
