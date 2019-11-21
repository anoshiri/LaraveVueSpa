import NotFound from './components/NotFound';
import Home from './components/Home';
import About from './components/About';
import Stats from './components/Stats';


export default {
    mode: 'history',

    routes: [
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/stats',
            component: Stats
        }
    ]

}