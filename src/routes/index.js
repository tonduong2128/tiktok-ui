import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Following from "../pages/Following/indes";
import Home from "../pages/Home/indes";
import NotFound from "../pages/NotFound";
import { HeaderOnly } from "~/Layout";
import Search from "../pages/Search/indes";
import routes from "~/config/routes";

const publicRoute = [
  // không cần đăng nhập
  { path: routes.home, component: Home },
  { path: routes.follwing, component: Following },
  { path: routes.profile, component: Profile },
  { path: routes.upload, component: Upload, layout: HeaderOnly },
  { path: routes.search, component: Search, layout: null },
  { path: routes.NotFound, component: NotFound, layout: null },
];
const privateRoute = [
  // cần đăng nhập
];
export { publicRoute, privateRoute };
