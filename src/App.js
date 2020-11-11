import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages
import Home from './pages/HomePage/Home';
import About from './pages/AboutPage/About';
import Skills from './pages/SkillsPage/Skills';
import MyWorks from './pages/MyWorksPage/MyWorks';
import Blog from './pages/BlogPage/Blog';
import Contact from './pages/ContactPage/Contact';

const App = () => {
  return (
    <main>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/skills' component={Skills} />
        <Route path='/myworks' component={MyWorks} />
        <Route path='/blog' component={Blog} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </main>
  );
};

export default App;
