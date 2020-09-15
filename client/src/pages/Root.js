import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

// Theme utils
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';
import { GlobalStyle } from 'utils/GlobalStyle';

// Pages components
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';

//Other utils
import useWindowSize from 'utils/useWindowSize';

function Root() {
  const size = useWindowSize();

  return (
    <Router>
      <LastLocationProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact>
              {size.width > 700 ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route path="/dashboard" exact component={Dashboard} />
          </Switch>
        </ThemeProvider>
      </LastLocationProvider>
    </Router>
  );
}

export default Root;
