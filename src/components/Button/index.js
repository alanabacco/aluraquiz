import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;

  width: 100%;
  padding: 10px 16px;
  font-family: inherit;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.5s;
  }

  &:disabled {
    background-color: #f4dfae;
    cursor: not-allowed;
  }
`;

export default Button;
