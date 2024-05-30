import dynamic from "next/dynamic";
const AuthLayout = dynamic(import("@/components/layouts/AuthLayout"), {
  ssr: false,
});
const SignInPage = dynamic(import("@/components/auth/signin"), {
  ssr: false,
});

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
