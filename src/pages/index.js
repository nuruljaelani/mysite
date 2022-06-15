import React from 'react';
import Layouts from '../components/Layouts';
import Portfolio from '../components/Portfolio';
import Profile from '../components/Profile';
import Skill from '../components/Skill';

// markup
function IndexPage() {
  return (
    <Layouts>
      <Portfolio />
      <Skill />
      <Profile />
    </Layouts>
  );
}

export default IndexPage;
