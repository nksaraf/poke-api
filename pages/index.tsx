import Head from "next/head";

import { GraphQLIDE } from "@magiql/ide";
export default function Home() {
  return typeof window !== "undefined" ? (
    <GraphQLIDE
      schemaConfig={{
        uri: window.location.origin + "/api/graphql",
      }}
    />
  ) : (
    <></>
  );
}
