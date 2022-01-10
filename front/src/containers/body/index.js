import React from 'react';

import { AddArticle } from '../../components/addArticle';
import { Articles } from '../../components/articles';
import { Profile } from '../../components/profile';

import "./style.css"


export const BodyContainer = ({ currentPage }) => {
  switch (currentPage) {
    case 'articles': {
      return (
        <main>
        <Articles 
          authorPost="Darth Vader"
          content="you underestimate the power of the dark side"
          date="04.05.2022"
        />
        </main>
      );
    }
    case 'addArticle': {
      return (
      <main>
        <AddArticle/>
      </main>
      );
    }
    case 'profile': {
      return (
        <main>
        <Profile 
          name="Darth Vader"
          avatar="../../../public/avatar.jpg"
          bday="02-05-19992"
          email="fakevader@gmail.com"
          phone="+3800077007"
        />
        </main>
      );
    }
  }
}