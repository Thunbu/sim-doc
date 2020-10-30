import * as React from "react";
import * as ReactDOM from 'react-dom';
import Main from "./Containers/Main";
import { Provider } from 'react-redux';
import store from './Store';
import './index.less';

class ChatRootContainer extends React.Component<any, any> {
    render() {
        return (
            <div id={'chat_root_container'}>
                <Provider store={store}>
                    <Main />
                </Provider>
                {/* Global Container */}
            </div>
        )
    }
}

const USERSIG = window.localStorage.getItem('USERSIG');
const USERID = window.localStorage.getItem('USERIMID');


export default () => {
    if (USERID && USERSIG) {
        ReactDOM.render(
            <ChatRootContainer />,
            document.getElementById('root')
        );
    } else {
        window.location.href = './login.html';
    }
}
