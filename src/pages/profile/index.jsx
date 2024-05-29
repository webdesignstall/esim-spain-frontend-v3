import ProfileLayout from "../../components/layouts/ProfileLayout";

const Profile = () => {
  return <div className="my-20">This is profile page</div>;
};

export default Profile;

Profile.getLayout = function (page) {
  return <ProfileLayout>{page}</ProfileLayout>;
};
