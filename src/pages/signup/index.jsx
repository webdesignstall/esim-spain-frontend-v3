import dynamic from "next/dynamic";
const AuthLayout = dynamic(import("@/components/layouts/AuthLayout"), {
  ssr: false,
});
const SignUpPage = dynamic(import("@/components/auth/signup"), {
  ssr: false,
});

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
