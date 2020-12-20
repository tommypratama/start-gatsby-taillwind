import React from "react";
import {Link} from 'gatsby';
import Header from '../components/header';

const About = () => {
  return (
    <div className="text-blue-500">
      <Header headerText="This is header in about page" />
      <h1>About Gatsby</h1>
      <p>Such wow. Very React.</p>
      <Link to="/contact/">Contact</Link>
    </div>
  );
};

export default About;
