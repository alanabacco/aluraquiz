import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

// const BackgroundImage = styled.div`
//  background-image: url(${db.bg});
//  flex: 1;
//  background-size: cover;
//  background-position: center;
// `;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  // console.log('retorno do useState', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Dreamcatcher</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>QUIZ DE DREAMCATCHER</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosEvento) {
              infosEvento.preventDefault();

              router.push(`/quiz?name=${name}`);

              console.log('Fazendo uma submissao por meio do react.');

              // router manda para a próx página
            }}
            >
              <Input
                name="nomeDoUsuário"
                onChange={(infosEvento) => {
                  setName(infosEvento.target.value);
                  // console.log(infosEvento.target.value);
                  // State
                  // name = infosEvento.target.value;
                }}
                placeholder="Nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Dreamcatcher</h1>
            <p>é um girlgroup sul coreano, que teve sua estreia em 2017. Possui influências do rock em suas músicas.</p>
            <p>Confira o último lançamento do grupo:</p>
            <iframe width="" height="" src="https://www.youtube.com/embed/1QD0FeZyDtQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/alanabacco" />
    </QuizBackground>
  );
}
