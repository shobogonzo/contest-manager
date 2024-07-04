"use client";

import { useAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";

const Loading = () => {
  return <>Loading...</>;
};

const Redirecting = () => {
  const router = useRouter();
  // TODO post-login nav - redirect to role-based route for initial login or proceed to current route if refreshing creds
  router.push("/scheduler", { scroll: false });
  return <>Redirecting...</>;
};

const Login = () => {
  // https://ui.docs.amplify.aws/react/connected-components/authenticator/advanced#access-auth-state
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  switch (authStatus) {
    case "authenticated":
      return <Redirecting />;
    default:
      return <Loading />;
  }
};

export default Login;
