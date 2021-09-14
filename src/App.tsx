import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom"
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import { useState } from 'react'

function App() {


    var SectionOneData:Title[] = []
    const [sectionOneData, setSectionOneData] = useState();

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
                        <SectionOne callback={setSectionOneData} />
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