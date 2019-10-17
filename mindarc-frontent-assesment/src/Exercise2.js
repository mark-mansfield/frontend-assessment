import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Layout from './components/Layout';
import Menu from './components/Menu';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import jsonData from './data.json';

const Exercise2 = () => {
  // state
  // react hooks are very handy !
  const [data, setData] = useState([]);
  const [defaultActiveKey, setDefaultActiveKey] = useState('0');
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

  const getData = () => {
    return jsonData;
  };

  // instead of using media queries in this exercise to show and hide content
  // I thought I would demonstrate how to do it using a state property
  // and some simple javascript
  // this approach would have a performance hit since it would perform re-renders
  // media queries would be more performant and the way to go, as the app wouldn't be updating state constantly.
  // it was more of an exercise to demonstrate react hooks

  // set some state for the template switcher logic
  // we are using an accordion layout for mobile
  // we use a tab layout for desktops
  function handleWindowSizeChange() {
    setWindowInnerWidth(window.innerWidth);
  }

  // use this in place of componentDidMount
  // read the data into state(new feature in react hooks! Love it!)
  // set a listener to handle window resizes
  // we also do cleanup of the event listener in useEffect
  // lets set the document title for fun!
  useEffect(() => {
    setData(getData());
    setDefaultActiveKey('0');

    document.title = `Exercise 2`;
    window.addEventListener('resize', handleWindowSizeChange);

    return function cleanupListener() {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [data, windowInnerWidth]);

  // template switcher logic
  const isMobile = windowInnerWidth < 768;

  // accordion template
  const getAccordionLayout = () => {
    return (
      <Accordion defaultActiveKey={defaultActiveKey}>
        {data &&
          data.length > 0 &&
          data.map((item, i) => (
            <div key={i} className="accordion-item" id="accordion-item">
              <div className="accordion-item__header flex-row">
                <Accordion.Toggle as={Button} variant="link" eventKey={'' + i + ''}>
                  {item.title}
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey={'' + i + ''}>
                <div className="accordion-item__content">
                  <div dangerouslySetInnerHTML={{ __html: item.content }} className="mt-3"></div>
                </div>
              </Accordion.Collapse>
            </div>
          ))}
      </Accordion>
    );
  };

  // tab template
  const getTabbedLayout = () => {
    return (
      <Tabs defaultActiveKey={setDefaultActiveKey}>
        {data &&
          data.length > 0 &&
          data.map((item, i) => (
            <Tab key={i} eventKey={i} title={item.title} className="mt-5 mb-b-5">
              <h2>{item.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
            </Tab>
          ))}
      </Tabs>
    );
  };

  return (
    <Layout>
      <div className="App">
        <Menu />
        {isMobile && getAccordionLayout()}
        {!isMobile && <div className="container">{getTabbedLayout()}</div>}
        <hr />
        <div className="container mt-4">
          <h2>Question</h2>
          <p>Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `banana`</p>
          <h2>Answer : implicit type coercion can have ambiguous effects</h2>
          <p>'+ +' tries to turn the next character 'a' into a number, this returns NaN.</p>
          <p>The expression returns b + a + NaN + a then converts it to lower case = banana</p>
        </div>
      </div>
    </Layout>
  );
};

export default Exercise2;
