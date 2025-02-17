import '../styles/Screen.css';

import Icone from './Icone';
import { ReactComponent as WindowsLogo } from '../Img/windowsLogo.svg';

export default function Screen() {
    return (
        <div className="screen-container" id="screen">
            <div id="WindowsIcone">
                <WindowsLogo />
            </div>
            <Icone src={require('../Img/consoleIcon.png')} alt="Console" id="ConsoleIcone" desc="Console" />
        </div>
    );
}
