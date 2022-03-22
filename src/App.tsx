import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <span>WELCOME! To Group 29 Web Page</span>
            <p>
                <span>
                    <Button onClick={() => setValue(1 + value)}>Add One</Button>
                    to {value}.
                </span>
                <span>
                    <Button onClick={() => setValue(value - 1)}>
                        Subtract One
                    </Button>
                </span>
            </p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
