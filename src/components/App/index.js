import { Fragment, memo } from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
// import PromptPage from '../PromptPage';
import NoPromptPage from '../NoPromptPage';
import { PromptPage2 } from '../PromptPage2';

function App() {
  return (
    <Fragment>
      <div className='main'>
        <div className='content'>
          <nav className='nav'>
            <NavLink className='nav-link' to='/' exact>Home Page</NavLink>
            <NavLink className='nav-link' to='/page'>Another Page</NavLink>
          </nav>
          <Switch >
            <Route path='/page' component={NoPromptPage}/>
            {/* <Route path='/' exact component={PromptPage}/> */}
            <Route path='/' exact>
              <PromptPage2 />
            </Route>
            <Redirect to='/'/>
          </Switch>
        </div>
      </div>
    </Fragment>
  );
}

export default memo(App);
