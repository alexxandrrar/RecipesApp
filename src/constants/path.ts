import React from 'react';
import { Home } from 'pages/Home/index';
import { Recipes } from 'pages/Recipes/index';

export enum EPath {
    HOME = '/',
    RECIPES = '/recipes'
}

type TPath = {
    path: string;
    element: () => React.ReactElement;
};

export const routes: TPath[] = [
    {
        path: EPath.HOME,
        element: Home,
    },
    {
        path: EPath.RECIPES,
        element: Recipes,
    },
];