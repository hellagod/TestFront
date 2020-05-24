import './index.css';
import * as serviceWorker from './serviceWorker';
import React from "react";
import ReactDOM from 'react-dom';
import UrlsRouter from "./main/UrlsRouter";
import store from "./redux/store";
let render = (state: any) => ReactDOM.render(
    <React.StrictMode>
        <UrlsRouter  key = {state.key} isLogin = {state.isLogin}/>
    </React.StrictMode>,
    document.getElementById('root')
);
render(store.getState());

store.subscribe(() =>{
    render(store.getState());
});
serviceWorker.unregister();
