import Seo from "@/layout/Seo";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja" prefix="og: http://ogp.me/ns#">
      <Head />
      <body>
      <Seo />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
