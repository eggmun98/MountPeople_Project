// import "../styles/globals.css";
import ApolloSetting from "../src/commons/apollo";

export default function App({ Component }): JSX.Element {
  return (
    <ApolloSetting>
      <Component />
    </ApolloSetting>
  );
}
