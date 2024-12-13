import '../styles/Screen.css';

import Icone from './Icone';

export default function Screen() {
    return (
        <div className="screen-container" id="screen">
            <Icone src={require('../Img/consoleIcon.png')} alt="Console" id="ConsoleIcone" desc="Console" />
        </div>
    );
}
