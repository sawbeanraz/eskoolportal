import { FunctionComponent } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { Container } from 'reactstrap';

import { securePage } from '~/lib/securePage';
import { User } from 'next-auth';

interface DashboardPageProps {
  user: User;
}

const DashboardPage: FunctionComponent<DashboardPageProps> = ({ user }) => {
  return (
    <Layout title="Dashboard" user={user}>
      <Container>
        <h1>Welcome to eskoolPortal</h1>
      </Container>
    </Layout>
  );
};

export const getServerSideProps = securePage();

export default DashboardPage;
