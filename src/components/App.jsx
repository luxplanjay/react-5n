import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
// import { SkipMountExample } from './SkipMountExample';
// import { LoginForm } from './LoginForm';
import { MemoExample } from './MemoExample';

export const App = () => {
  return (
    <Layout>
      {/* <SkipMountExample /> */}
      {/* <LoginForm /> */}
      <MemoExample />
      <GlobalStyle />
    </Layout>
  );
};
