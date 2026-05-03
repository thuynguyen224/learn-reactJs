import React from 'react';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import AlbumFeature from './features/Album';
import ListPage from './features/Todo/pages/ListPage';
import DetailPage from './features/Todo/pages/DetailPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      Header
      <p><NavLink to='/todos' activeClassName="active-menu">Todo</NavLink></p>
      <p><NavLink to='/albums' activeClassName="active-menu">Album</NavLink></p>
      <Routes>
        <Route path="/todos" element={<ListPage />}>
          <Route index element={<ListPage />} />
          <Route path=":todoId" element={<DetailPage />} />
        </Route>
        <Route path='/albums' element={<AlbumFeature />} />
        <Route path='/not-found' element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>

      Footer
    </div>
  );
}

export default App;
