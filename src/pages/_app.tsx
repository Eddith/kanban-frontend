import "@/styles/globals.css";
import type { AppProps } from "next/app";
// Components
import RecentPages from "@/components/RecentPages";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <RecentPages />
    </>
  );
}
