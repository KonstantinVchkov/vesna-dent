import { Html, Head, Main, NextScript } from "next/document";
const SITE_URL = "https://vesna-dent.vercel.app";
export default function Document() {
  return (
    <Html lang="mk">
      <Head>
        <title>Vesna Dent</title>

        <meta
          name="description"
          content="Vesna-Dent е современа стоматолошка ординација која нуди белеење на заби, имплантологија, ендодонција, протетика, пародонтологија и орална хирургија. Закажете термин денес."
        />

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical */}
        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph */}
        <meta property="og:title" content="Vesna Dent" />
        <meta
          property="og:description"
          content="Професионална стоматолошка нега и современи третмани за здрава и убава насмевка."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />

        {/* НАЈБИТНО */}
        <meta property="og:image" content={`${SITE_URL}/og.jpg`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1016" />

        <meta property="og:locale" content="mk_MK" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vesna Dent" />
        <meta
          name="twitter:description"
          content="Современи стоматолошки третмани и индивидуален пристап кон секој пациент."
        />
        <meta name="twitter:image" content={`${SITE_URL}/og.jpg`} />

        {/* Favicon */}
        <link rel="icon" href="/assets/images/some-dental-logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
