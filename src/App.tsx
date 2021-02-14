import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

import {
    about,
    help,
    contact,
    interests,
    prolang,
    experience,
    takeTo,
    projects,
} from './utils';

class App extends Component<{}, {}> {
    render() {
        return (
            <div className="terminal"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh"
                }}
            >
                <Terminal
                    color='yellow'
                    backgroundColor='black'
                    barColor='silver'
                    style={{ fontWeight: "bold", fontSize: "1em" }}
                    prompt='yellow'
                    promptSymbol='$'
                    allowTabs={false}
                    commands={{
                        'help': () => help(),
                        'about': () => about(),
                        'interests': () => interests(),
                        'contact': () => contact(),
                        'prolang':() =>prolang(),
                        'experience':() =>experience(),
                        'projects':() => projects(),
                        'fiverr': () => takeTo('fiverr'),
                        'linkedin': () => takeTo('linkedin'),
                        'personal_website': () => takeTo('personal_website'),
                        'github': () => takeTo('github'),
                    }}
                    msg={
                        '🧐 Mohiuddin Abdul Kader (Software Engineer)\n' +
                        '\n❓Type help (and press enter or return) to get started!\n'+
                        '❓You can also click on the green dot on top to maximize the console.\n' +
                        `⏱${new Date()}`
                    }
                />
            </div>
        );
    }
}

export default App;
