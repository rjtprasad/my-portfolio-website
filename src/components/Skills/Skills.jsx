import React from 'react'
import Box1 from './Box1'
import Box2 from './Box2'

import './skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>
      <div className="skills__container container grid">
          <Box1/>
          <Box2/>
          
      </div>
    </section>
  )
}

export default Skills