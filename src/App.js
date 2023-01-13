import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./redux/cake/HooksCakeContainer";
import store from "./redux/store";
// import UserContainer from "./redux/user/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        {/* <UserContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
