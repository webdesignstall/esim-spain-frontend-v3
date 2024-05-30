import ProfileLayout from "../../components/layouts/ProfileLayout";
import ProfilePage from "../../components/profile";

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
