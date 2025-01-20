import { Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home'
import Contact from './components/contact'
import About from './components/about'
import './App.css'

function App() {
  return (

    <div>
            {/* Routes without using Switch */}
                  <Routes>
                          <Route path="/" exact element={<Home />} />
                                  <Route path="/about" element={<About />} />
                                          <Route path="/contact" element={<Contact />} />
                                            
                                                        </Routes>

                                                              {/* Navigation links */}
                                                                    <nav>
                                                                            <ul>
                                                                                      <li><Link to="/">Home</Link></li>
                                                                                                <li><Link to="/about">About</Link></li>
                                                                                                          <li><Link to="/contact">Contact</Link></li>
                                                                                                                  
                                                                                                                            </ul>
                                                                                                                                  </nav>

                                                                                                                                      </div>
  )

}

export default App;
