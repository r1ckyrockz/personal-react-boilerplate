import { Box } from '@chakra-ui/core';
import * as React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { ScrollToTop } from './components/ScrollToTop';
import { useNavigation } from './hooks/useNavigation';
import { AuthAwareRedirect } from './routes/AuthAwareRedirect';

export default function App() {
  const { routes } = useNavigation();

  return (
    <>
      <ScrollToTop />
      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
      <Box as="main" p={4}>
        <Switch>
          {Object.values(routes).map(
            ({ exact, component, path: { router } }) => (
              <Route
                path={router}
                component={component}
                exact={exact}
                key={router}
              />
            )
          )}
          <Route component={AuthAwareRedirect} />
        </Switch>
      </Box>
      <Footer />
    </>
  );
}
