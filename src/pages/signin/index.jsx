import SignInPage from "@/components/auth/signin";
import AuthLayout from "../../components/layouts/AuthLayout";

const Signin = () => {
  return (
    <div>
      <SignInPage />
    </div>
  );
};

export default Signin;

Signin.getLayout = function (page) {
  return <AuthLayout>{page}</AuthLayout>;
};
