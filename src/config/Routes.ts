import { IRoute } from "interface/components/Navigation";
import { Quiz, Quizes, NewQuiz } from "../pages/Quiz";

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
    {
        path: "/newQuiz",
        name: "NewQuiz",
        component: NewQuiz,
        exact: true,
    },
];