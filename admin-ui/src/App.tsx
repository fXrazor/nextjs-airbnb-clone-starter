import React, { useEffect, useState } from "react";
import { Admin, DataProvider } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { createBrowserHistory as createHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ListingList } from "./listing/ListingList";
import { ListingCreate } from "./listing/ListingCreate";
import { ListingEdit } from "./listing/ListingEdit";
import { ListingShow } from "./listing/ListingShow";
import { WishlitstList } from "./wishlitst/WishlitstList";
import { WishlitstCreate } from "./wishlitst/WishlitstCreate";
import { WishlitstEdit } from "./wishlitst/WishlitstEdit";
import { WishlitstShow } from "./wishlitst/WishlitstShow";
import { TripList } from "./trip/TripList";
import { TripCreate } from "./trip/TripCreate";
import { TripEdit } from "./trip/TripEdit";
import { TripShow } from "./trip/TripShow";
import { auth0AuthProvider } from "./auth-provider/ra-auth-auth0";

const history = createHistory();

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: DataProvider) => {
        setDataProvider(() => provider);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Admin
          history={history}
          title={"airbnb-server"}
          dataProvider={dataProvider}
          authProvider={auth0AuthProvider}
          theme={theme}
          dashboard={Dashboard}
          loginPage={Login}
        >
          <Resource
            name="User"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
          />
          <Resource
            name="Listing"
            list={ListingList}
            edit={ListingEdit}
            create={ListingCreate}
            show={ListingShow}
          />
          <Resource
            name="Wishlitst"
            list={WishlitstList}
            edit={WishlitstEdit}
            create={WishlitstCreate}
            show={WishlitstShow}
          />
          <Resource
            name="Trip"
            list={TripList}
            edit={TripEdit}
            create={TripCreate}
            show={TripShow}
          />
        </Admin>
      </BrowserRouter>
    </div>
  );
};

export default App;
