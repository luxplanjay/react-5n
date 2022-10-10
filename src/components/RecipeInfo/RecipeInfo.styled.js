import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
  padding: 8px;
  border: 1px solid ${(p) => p.theme.colors.black};
  border-radius: 4px;
`;

export const InfoBlock = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
`;
