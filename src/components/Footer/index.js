import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 20px;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    transition: 0.3s;
    text-decoration: underline;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
`;

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
          alt="Logo Alura"
        />
      </a>
      <p>
        Projeto criado durante a Imersão React da <a href="https://www.alura.com.br/">Alura</a>
        {' | '}
        <a href="https://www.linkedin.com/in/alana-bacco/">Linkedin</a>{' '}
        <a href="https://github.com/alanabacco">Github</a>
      </p>
    </FooterWrapper>
  );
}
