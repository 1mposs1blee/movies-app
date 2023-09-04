import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Navigation,
  Link,
  LineWrapper,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/movies">Search movies</Link>
          <LineWrapper />
        </Navigation>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
