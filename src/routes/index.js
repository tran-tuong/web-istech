import Home from "../pages/Home/Home";
import Partners from "../pages/Partners/Partners";
import BoardOfDirectors from "../pages/BoardOfDirectors/BoardOfDirectors";
import Department from "../pages/Department/Department";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Events from "../pages/Events";
import InternalActivities from "../pages/InternalActivities";
import Blog from "../pages/Blog";
import ResourceHub from "../pages/ResourceHub";
import NotFound from "../pages/NotFound";
import FullStack from "../pages/FullStack/FullStack";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/partners', component: Partners },
    { path: '/board-of-director', component: BoardOfDirectors },
    { path: '/departments', component: Department },
    { path: '/departments/:id', component: FullStack },
    { path: '/contact', component: Contact },
    { path: '/about', component: About, status: 503 },
    { path: '/events', component: Events, status: 503 },
    { path: '/internal-activities', component: InternalActivities, status: 503 },
    { path: '/blog', component: Blog, status: 503 },
    { path: '/resource-hub', component: ResourceHub, status: 503 },
    { path: '*', component: NotFound, status: 404 },
];

const privateRoutes = [];


export { publicRoutes, privateRoutes };
