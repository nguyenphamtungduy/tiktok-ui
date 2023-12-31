import Home from "../pages/Home";
import Following from "../pages/Following";
import Users from "../pages/Users";
import Search from "../pages/Search";
import { DefaultLayout } from "../components/Layouts";
import { OnlyHeader } from "../components/Layouts";
const publicRoutes = [
    { path: "/", component: Home, layout: DefaultLayout },
    { path: "/following", component: Following, layout: DefaultLayout },
    { path: "/users", component: Users, layout: null },
    { path: "search", component: Search, layout: OnlyHeader },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
