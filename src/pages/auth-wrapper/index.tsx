import { useAuth0 } from "@auth0/auth0-react";

// type for the children prop
type Props = {
  children: React.ReactElement;
};

const AuthWrapper = ({ children }: Props) => {
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
