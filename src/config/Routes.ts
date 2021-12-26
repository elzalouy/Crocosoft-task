import { IRoute } from "interface/components/Navigation";
import { Quiz, Quizes } from "../pages/Quiz";

export const AppRoutes: IRoute[] = [
    {
        path: "/Quizes",
        name: "Quizes",
        component: Quizes,
        exact: true,
    },
    {
        path: "/Quiz/:id",
        name: "Quiz",
        component: Quiz,
        exact: true,
    },
];