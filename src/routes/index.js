import NoteBook from "../pages/NoteBook/NoteBook";
import React from "react";

const Home = React.lazy(() => import("../pages/Home/Home"));
const BoardOfDirectors = React.lazy(() => import("../pages/BoardOfDirectors/BoardOfDirectors"));
const Partners = React.lazy(() => import("../pages/Partners/Partners"));
const Department = React.lazy(() => import("../pages/Department/Department"));
const Contact = React.lazy(() => import("../pages/Contact/Contact"));
const About = React.lazy(() => import("../pages/About/About"));
const Events = React.lazy(() => import("../pages/Events"));
const MainEvent = React.lazy(() => import("../pages/Events/MainEvent"));
const EventDetail = React.lazy(() => import("../pages/Events/EventDetail"));
const FullStack = React.lazy(() => import("../pages/FullStack/FullStack"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Maintainance = React.lazy(() => import("../pages/Maintainance"));


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/partners', component: Partners },
    { path: '/board-of-director', component: BoardOfDirectors },
    { path: '/departments', component: Department },
    { path: '/departments/:id', component: FullStack },
    { path: '/contact', component: Contact },
    { path: '/about', component: About },
    { path: '/events', component: MainEvent },
    { path: '/all-events', component: Events },
    { path: '/events/:type/:eventName', component: EventDetail },
    { path: '/internal-activities', component: Maintainance },
    { path: '/blog', component: Maintainance },
    { path: '/notebook', component:NoteBook },
    { path: '/resource-hub', component: Maintainance },
    { path: '*', component: NotFound, status: 404 },
    
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
