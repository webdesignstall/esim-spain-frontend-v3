import { gql } from "@apollo/client";
import { F_CUSTOMER } from "../customer/CustomerFragment";

export const F_LOGIN_SOCIAL = gql`
  ${F_CUSTOMER}
  fragment F_LOGIN_SOCIAL on LoginSocialResponseDto {
    accessToken
    isRegistered
    profile {
      ...F_CUSTOMER
    }
  }
`;

export const F_LOGIN = gql`
  ${F_CUSTOMER}
  fragment F_LOGIN on LoginResponseDto {
    accessToken
    isVerified
    isRegistered
    profile {
      ...F_CUSTOMER
    }
  }
`;
