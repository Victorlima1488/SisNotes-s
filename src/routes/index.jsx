import { BrowserRouter } from "react-router-dom";
import { AppRouters } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
    return (
        <BrowserRouter>
            <AppRouters />
            {/* <AuthRoutes /> */}
        </BrowserRouter>
    )
}