"use client";

import "@aws-amplify/ui-react/styles.css";
import { Amplify, ResourcesConfig } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";

interface ProvidersProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: ProvidersProps) => {
  const config: ResourcesConfig = {
    Auth: {
      Cognito: {
        userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID!,
        userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID!,
        identityPoolId: process.env.NEXT_PUBLIC_IDENTITY_POOL_ID!,
      },
    },
  };
  Amplify.configure(config, { ssr: true });

  return (
    <>
      <Authenticator
        className="h-full"
        loginMechanisms={["email"]}
        formFields={{
          // require first name and last name on sign up
          signUp: {
            given_name: {
              label: "First Name",
              placeholder: "Enter your first name",
              required: true,
              type: "text",
            },
            family_name: {
              label: "Last Name",
              placeholder: "Enter your last name",
              required: true,
              type: "text",
            },
            "custom:tenantName": {
              label: "Organization",
              placeholder: "Enter the name of your organization",
              required: true,
              type: "text",
            },
          },
        }}
      >
        <Authenticator.Provider>{children}</Authenticator.Provider>
      </Authenticator>
    </>
  );
};
