import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "WebDev Newz",
  keywords: "web development, progamming",
  description: "Get the latest news about web dev",
};

export default Meta;

/**
 * There is a package next-seo for better SEO Handling on NextJs
 */
