import React, { useEffect } from 'react';
import Menu from './components/Menu';
import Layout from './components/Layout';

const Exercise1 = () => {
  // lets use react hooks !
  // lets set the document title for fun
  useEffect(() => {
    document.title = 'Exercise 1';
  }, []);

  // lets use functional components to make the code cleaner
  const header = () => {
    return (
      <header id="header" className="container-fluid">
        <div className="header__banner-message">
          <h1>Hello Developer!</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="header__banner-image"></div>
      </header>
    );
  };

  const mainContent = () => {
    return (
      <div className="" id="main">
        <div className="row justify-content-center mt-3">
          <div className="col-md-auto card align-items-center justify-content-between">
            <div className="image">
              <img src="http://via.placeholder.com/400X300" width="400" alt="" title="image"></img>
            </div>
            <div className="text mt-3 mb-3 flex-grow-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ab corrupti perferendis quibusdam
              magni, ducimus sit sint totam doloremque accusantium officia amet possimus culpa quasi odit, architecto
              hic id quo!
            </div>
            <button className="btn btn-outline-dark rounded-button">read more</button>
          </div>
          <div className="col-md-auto card align-items-center justify-content-between">
            <div className="image">
              <img src="http://via.placeholder.com/400X300" width="400" alt="" title="image"></img>
            </div>
            <div className="text mt-3 mb-3 flex-grow-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ab corrupti perferendis quibusdam
              magni,
            </div>
            <button className="btn btn-outline-dark rounded-button">read more</button>
          </div>
          <div className="col-md-auto card align-items-center justify-content-between">
            <div className="image">
              <img src="http://via.placeholder.com/400X300" width="400" alt="" title="image"></img>
            </div>
            <div className="text mt-3 mb-3 flex-grow-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ab corrupti perferendis quibusdam
              magni, ducimus sit sint totam doloremque accusantium officia amet possimus culpa
            </div>
            <button className="btn btn-outline-dark rounded-button">read more</button>
          </div>

          {/* <div className="col-sm">
            <div className="card align-items-center">
              <div className="image">
                <img src="http://via.placeholder.com/400X300" alt="" title="image"></img>
              </div>
              <div className="text mt-3 mb-3 flex-grow-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ab corrupti perferendis quibusdam
                magni, ducimus sit sint totam doloremque accusantium officia amet possimus culpa quasi odit, architecto
                hic id quo!
              </div>
              <button className="btn btn-outline-dark rounded-button">read more</button>
            </div>
          </div>
          <div className="col-sm">
            <div className="card align-items-center">
              <div className="image">
                <img src="http://via.placeholder.com/400X300" alt="" title="image"></img>
              </div>
              <div className="text mt-3 mb-3 flex-grow-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ab corrupti perferendis quibusdam
                magni, ducimus sit sint totam doloremque accusantium officia
              </div>
              <button className="btn btn-outline-dark rounded-button">read more</button>
            </div>
          </div>
          <div className="col-sm">
            <div className="card align-items-center">
              <div className="image">
                <img src="http://via.placeholder.com/400X300" alt="" title="image"></img>
              </div>
              <div className="text mt-3 mb-3 flex-grow-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium ab corrupti perferendis quibusdam
                magni, ducimus sit sint totam doloremque accusantium amet possimus culpa quasi odit,
              </div>
              <button className="btn btn-outline-dark rounded-button">read more</button>
            </div>
          </div> */}
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <Menu />
      {header()}
      {mainContent()}
    </Layout>
  );
};

export default Exercise1;
