/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const addUser = /* GraphQL */ `mutation AddUser($user: UserInput!) {
  addUser(user: $user)
}
` as GeneratedMutation<
  APITypes.AddUserMutationVariables,
  APITypes.AddUserMutation
>;
