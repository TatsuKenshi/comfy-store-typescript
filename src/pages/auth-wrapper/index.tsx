import { useAuth0 } from "@auth0/auth0-react";
import { ChildrenPropType } from "../types";

const AuthWrapper = ({ children }: ChildrenPropType) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <section className="">
        <h1 className="">Loading...</h1>
      </section>
    );
  }

  if (error) {
    return (
      <section className="">
        <h1 className="">{error.message}</h1>
      </section>
    );
  }

  return <section>{children}</section>;
};

export default AuthWrapper;
