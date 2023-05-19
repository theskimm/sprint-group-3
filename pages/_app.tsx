import localFont from "next/font/local";
import Nav from "~/components/nav";
import type { AppProps } from "next/app";
import "~/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${sangbleu.variable} ${gt_america.variable} ${gt_america_mono.variable}`}
    >
      <Nav />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

const sangbleu = localFont({
  src: [
    {
      path: "../public/fonts/sangbleu/SangBleuOGSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/sangbleu/SangBleuOGSans-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/sangbleu/SangBleuOGSans-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/sangbleu/SangBleuOGSans-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/sangbleu/SangBleuOGSans-Black.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/sangbleu/SangBleuOGSans-BlackItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-sangbleu",
  display: "swap",
});

const gt_america = localFont({
  src: [
    {
      path: "../public/fonts/gt-america/GT-America-Standard-Thin-Trial.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Standard-Thin-Italic-Trial.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Standard-Light-Trial.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Standard-Light-Italic-Trial.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Standard-Regular-Trial.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Standard-Regular-Italic-Trial.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Standard-Medium-Trial.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Standard-Medium-Italic-Trial.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Standard-Black-Trial.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Standard-Black-Italic-Trial.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-gt-america",
  display: "swap",
});

const gt_america_mono = localFont({
  src: [
    {
      path: "../public/fonts/gt-america/GT-America-Mono-Thin-Trial.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Mono-Thin-Italic-Trial.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Mono-Light-Trial.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Mono-Light-Italic-Trial.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Mono-Regular-Trial.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Mono-Regular-Italic-Trial.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Mono-Medium-Trial.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Mono-Medium-Italic-Trial.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Mono-Black-Trial.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/gt-america/GT-America-Mono-Black-Italic-Trial.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-gt-america-mono",
  display: "swap",
});
