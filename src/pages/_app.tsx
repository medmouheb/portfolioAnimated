import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.scss";
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>My Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(MyApp);