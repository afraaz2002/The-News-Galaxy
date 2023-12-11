import React from 'react';
import Hero from "./Hero"
import Trending from './Trending';
import Planet from './Planet';
import NewsType from './NewsType';

function Main() {
  return (
    <>
      <Hero />
      <Trending />
      <Planet />
      <NewsType newsType="general" pages="16" />
    </>
  )
}

export default Main