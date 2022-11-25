// @ts-nocheck
import React from 'react';
import {
    Link,
    Outlet,
    Route,
    Routes,
    redirect,
} from 'react-router-dom';

import Counter from '@features/counter/Counter';
import Posts from '@features/posts/Posts';
import Dogs from '@features/dogs/Dogs';

const AppRouter = () => {
    return (
        <Routes>
            <Route
                element={
                    <>
                        <Link to="posts">
                            Posts
                        </Link>
                        <Link to="/">
                            Counter
                        </Link>
                        <Link to="dogs">
                            Dogs
                        </Link>
                        <Outlet />
                    </>
                }
            >
                <Route
                    path="/"
                    element={<Counter />}
                />
                <Route
                    path="/posts"
                    element={<Posts />}
                />
                <Route
                    path="/dogs"
                    element={<Dogs />}
                />
            </Route>
        </Routes>
    );
};

export default AppRouter;