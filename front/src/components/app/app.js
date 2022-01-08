import { AccPostContainer } from "../../containers/accPost/accPost.js";
import "./app.css";


function App() {
    return (
        <div className="app">
            <header className="App-header">
                <AccPostContainer author="Elon Musk" 
                    handle="elonmusk" 
                    verified='&#10003;' 
                    date='08.12.2021' 
                    content='As always, Tesla is looking for hardcore AI engineers who care about solving problems that directly affect people’s lives in a major way.' />
            </header>

        </div>
    );
}

export default App;

