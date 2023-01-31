import Head from "next/head";

export default function Header() {
  return (
    <Head>
      <title>KVebiant</title>
      <link
        rel="icon"
        href={(process.env.NEXT_PUBLIC_PORT as string) + "/assets/favicon.ico"}
      />
    </Head>
  );
}