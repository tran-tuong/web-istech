import Home from "../pages/Home/Home";
import Partners from "../pages/Partners/Partners";
import BoardOfDirectors from "../pages/BoardOfDirectors/BoardOfDirectors";
import Department from "../pages/Department/Department";
import Contact from "../pages/Contact/Contact";
// import About from "../pages/About/About";
import Events from "../pages/Events";
// import InternalActivities from "../pages/InternalActivities";
// import Blog from "../pages/Blog";
// import ResourceHub from "../pages/ResourceHub";
import NotFound from "../pages/NotFound";
import FullStack from "../pages/FullStack/FullStack";
import Maintainance from "../pages/Maintainance";
import NoteBook from "../pages/NoteBook/NoteBook";
import EventType from "../pages/Events/EventType";
import EventDetail from "../pages/Events/EventDetail";


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/partners', component: Partners },
    { path: '/board-of-director', component: BoardOfDirectors },
    { path: '/departments', component: Department },
    { path: '/departments/:id', component: FullStack },
    { path: '/contact', component: Contact },
    { path: '/about', component: Maintainance },
    { path: '/events', component: Events },
    { path: '/events/:type', component: EventType },
    { path: '/events/:type/:eventName', component: EventDetail },
    { path: '/internal-activities', component: Maintainance },
    { path: '/blog', component: Maintainance },
    { path: '/notebook', component:NoteBook },
    { path: '/resource-hub', component: Maintainance },
    { path: '*', component: NotFound, status: 404 },
    
];

const privateRoutes = [];


export { publicRoutes, privateRoutes };
