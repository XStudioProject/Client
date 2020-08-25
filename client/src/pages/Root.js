import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Theme utils
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';
import { GlobalStyle } from 'utils/GlobalStyle';

// Pages components
import Home from 'pages/Home';
import Register from 'pages/Register';

function Root() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
