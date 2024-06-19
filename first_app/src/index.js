

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state, { addPost, subscribe, updateNewPostText, addMassege, updateNewMassegeText } from './redux/State'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let RenderEntierTree = () => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                    addMassege={addMassege}
                    updateNewMassegeText={updateNewMassegeText}
                />
            </BrowserRouter>
        </React.StrictMode>
    );

    reportWebVitals();
}


RenderEntierTree(state)
subscribe(RenderEntierTree)