import { Layout } from '~/components';

export default function PrivateSaleRoute() {
  return (
    <Layout className="prose dark:prose-invert">
      <h1 className="font-comic text-primary-500">Private Sale</h1>
      <p>Subsribe form</p>
      <form action="">
        <input type="email" />
      </form>
    </Layout>
  );
}
