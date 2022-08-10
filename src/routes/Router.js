import React from "react";
import { AppRoutes } from "./AppRoutes";
import Layout from "../layout"

const RegistrationForm = React.lazy(() => import("../component/RegistrationForm"));
const Thankyou = React.lazy(() => import("../component/RegistrationForm/Thanks"));

export const routes = [
    {
        key: "registrationform",
        path: AppRoutes.REGISTRATIONFORM,
        exact: true,
        name: "registrationform",
        component: RegistrationForm,
        layout: Layout,
    },
    {
        key: "thankyou",
        path: AppRoutes.THANKYOU,
        exact: true,
        name: "thankyou",
        component: Thankyou,
        layout: Layout,
    },

]