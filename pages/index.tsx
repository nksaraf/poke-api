import GraphQLBrowser from "@magiql/browser";
export default function Home() {
  return typeof window !== "undefined" ? (
    <GraphQLBrowser
      initialSchemaConfig={{
        uri: window.location.origin + "/api/graphql",
      }}
    />
  ) : (
    <></>
  );
}
