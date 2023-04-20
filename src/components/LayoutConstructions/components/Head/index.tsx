import Head from "next/head";
import colors from "../../../../styles/colors";

type HeadProps = {
  prefix?: string;
  title?: string;
  description?: string;
  url?: string;
};

const HeadComponent = ({
  prefix = "Obras",
  title = "Início",
  description = "As Obras estão cada vez mais transparente.",
  url = "https://teste.com.br/",
}: HeadProps) => {
  const textTitle = `${prefix} - ${title}`;
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
      />

      <link
        rel="icon"
        href="/icons/favicon.png"
        sizes="16x16"
        type="image/x-icon"
      />
      <link
        rel="icon"
        href="/icons/favicon.png"
        sizes="32x32"
        type="image/x-icon"
      />
      <link rel="manifest" href="/site.webmanifest" />

      <meta name="theme-color" content={colors.white} />

      <title>{textTitle}</title>
      <meta name="title" content={`${prefix} - ${title}`} />
      <meta name="description" content={description} />
      <meta name="author" content="Obras" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`${prefix} - ${title}`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/icons/favicon.png" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
    </Head>
  );
};

export default HeadComponent;
