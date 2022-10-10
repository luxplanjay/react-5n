import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 8px;
  border: 1px solid ${(p) => p.theme.colors.black};
  border-radius: 4px;
`;

export const Title = styled.h2`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
