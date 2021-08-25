import { Redirect, Route, Switch } from 'react-router-dom';

import CharacterDetails from './pages/character-details';
import CharacterList from './pages/character-list';

const CharacterRoutes = () => {
  return (
    <Switch>
      <Route path="/characters" exact>
        <CharacterList />
      </Route>

      <Route path="/characters/:id">
        <CharacterDetails />
      </Route>

      <Redirect to="/characters" />
    </Switch>
  );
};

export default CharacterRoutes;
