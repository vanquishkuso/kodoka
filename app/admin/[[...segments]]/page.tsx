import { AdminView } from 'payload/components/views/Admin';
import { Metadata } from 'next';
import configPromise from '../../../payload.config';

export const metadata: Metadata = {
  title: 'AnalytiX Pro Admin',
  description: 'Admin panel for AnalytiX Pro',
};

const Admin = ({ params }: { params: { segments: string[] } }) => {
  return <AdminView config={configPromise} />;
};

export default Admin;