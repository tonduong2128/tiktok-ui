import Profile from "./pages/Profile";
import Upload from "./pages/Upload";
import Following from "./pages/Following/indes";
import Home from "./pages/Home/indes";
import NotFound from "./pages/NotFound";
import { HeaderOnly } from "./components/Layout";
import Search from "./pages/Search/indes";

const publicRoute = [ // không cần đăng nhập
    { path: "/", component: Home },
    { path: "/follwing", component: Following },
    { path: "/profile", component: Profile },
    { path: "/upload", component: Upload, layout: HeaderOnly },
    { path: "/search", component: Search, layout: null },
    { path: "*", component: NotFound, layout: null },

]
const privateRoute = [ // cần đăng nhập

]
export { publicRoute, privateRoute };