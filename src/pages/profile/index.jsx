import dynamic from "next/dynamic";

const ProfileLayout = dynamic(
  import("../../components/layouts/ProfileLayout"),
  {
    ssr: false,
  }
);
const ProfilePage = dynamic(import("../../components/profile"), {
  ssr: false,
});
const Profile = () => {
  return (
    <div>
      <ProfilePage />
    </div>
  );
};

export default Profile;

Profile.getLayout = function (page) {
  return <ProfileLayout>{page}</ProfileLayout>;
};
