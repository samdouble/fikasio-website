import Head from 'next/head';

export type MyHeadProps = {
  children: JSX.Element | JSX.Element[];
  title?: String;
};

const MyHead = ({ children, title = 'fikas.io' }: MyHeadProps) => {
  return (
    <Head>
      <title>{ title }</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="description" content="A webcomic about current events and people in general" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" sizes="128x128" />
      { children }
    </Head>
  );
}

export default MyHead;
