import SignUpPage from "@/components/auth/signup";
import AuthLayout from "../../components/layouts/AuthLayout";

const SignUp = () => {
  return (
    <div>
      <SignUpPage />
    </div>
  );
};

export default SignUp;

SignUp.getLayout = function (page) {
  return <AuthLayout>{page}</AuthLayout>;
};
