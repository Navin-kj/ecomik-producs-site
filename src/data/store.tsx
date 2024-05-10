import { createStore } from "redux";
import rootReducer from "./rootReducer";

interface ExtendedWindow extends Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  __REDUX_DEVTOOLS_EXTENSION__?: () => any;
}

const devToolsExtension = (window as ExtendedWindow)
  .__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(
  rootReducer,
  devToolsExtension && devToolsExtension()
);

export default store;
