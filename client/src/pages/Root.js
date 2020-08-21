import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Theme utils
import { ThemeProvider } from 'styled-components';
import { theme } from 'utils/theme';
import { GlobalStyle } from 'utils/GlobalStyle';

// Pages components
import Home from 'pages/Home';

function Root() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
