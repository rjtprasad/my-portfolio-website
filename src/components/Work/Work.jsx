import React from 'react';
import Works from './Works';

import './work.css'

const Work = () => {
  return (
    <section className="work section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent works</span>

        <Works/>
    </section>
  )
}

export default Work