import React from 'react';
import { Home } from 'pages/Home/index';

export enum EPath {
    HOME = '/',
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
];