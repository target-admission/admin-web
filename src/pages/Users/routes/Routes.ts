import { lazy } from "react";
import { ROUTES } from "./path";

const Routes = [
	{
		path: ROUTES.OVERVIEW,
		Component: lazy(() => import("../pages/Overview")),
	},
	{
		path: ROUTES.CREATE,
		Component: lazy(() => import("../pages/Create")),
	},
	{
		path: ROUTES.INFO,
		Component: lazy(() => import("../pages/Info")),
	},
	{
		path: ROUTES.NOTFOUND,
		Component: lazy(() => import("@/pages/NotFound")),
	},
];

export default Routes;
