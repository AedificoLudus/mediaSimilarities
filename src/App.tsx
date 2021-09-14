import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom"
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'

function App() {

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link
                            to="/SectionOne">Section One</Link>
                        </li>
                        <li>
                            <Link
                            to="/SectionTwo">Section Two</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/SectionOne">
                        <SectionOne />
                    </Route>
                    <Route path="/SectionTwo">
                        <SectionTwo />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;