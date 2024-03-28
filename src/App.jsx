import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import SomeComponent from './assets/components/SomeComponent';
import SomeContext from './assets/components/SomeContext';

import {
    createHashRouter,
    Link,
    Outlet,
    RouterProvider
} from 'react-router-dom';

function Root() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Hem</Link>
                    </li>
                    <li>
                        <Link to="/about">Om oss</Link>
                    </li>
                    <li>
                        <Link to="/contact">Kontakt</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet />
                <SomeContext.Provider value={"Hej"}>
                    <SomeComponent />
                </SomeContext.Provider>
            </main>
        </>
    );
}

function App() {
    const router = createHashRouter([
        {
            children: [
                { element: <Home />, path: '/' },
                { element: <About />, path: '/about' },
                { element: <Contact />, path: '/contact' }
            ],
            element: <Root />
        }
    ]);

    return <RouterProvider router={router} />;
}

export default App;
