import React from 'react';
import Layouts from '../components/Layouts';
import Portfolio from '../components/Portfolio';
import Profile from '../components/Profile';
import Skill from '../components/Skill';

// markup
function IndexPage() {
  const about = React.useRef();
  const skills = React.useRef();
  const home = React.useRef();
  const portfolio = React.useRef();

  const options = {
    block: 'start',
    behavior: 'smooth',
    inline: 'start',
  };
  return (
    <Layouts home={home} portfolio={portfolio} skill={skills} about={about} options={options}>
      <Portfolio portfolio={portfolio} />
      <Skill skill={skills} />
      <Profile about={about} />
    </Layouts>
  );
}

export default IndexPage;
