import { useAxios, useProfile } from "../../hooks";
import EditIcon from "../../assets/icons/edit.svg";
import { useRef } from "react";
import { actions } from "../../actions";
import defaultAvatar from "../../assets/images/avatars/avatar_1.png";

const ProfileImage = () => {
  const { state, dispatch } = useProfile();
  const { user } = state;
  const { api } = useAxios();

  const fileUploadRef = useRef();

  const handleImageUpload = (e) => {
    e.preventDefault();
    fileUploadRef.current.addEventListener("change", updateImageDisplay);
    fileUploadRef.current.click();
  };

  const updateImageDisplay = async () => {
    try {
      const formData = new FormData();

      for (const file of fileUploadRef.current.files) {
        formData.append("avatar", file);
      }

      // const response = await api.post(
      //   `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${user?.id}/avatar`,
      //   formData
      // );
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
          state?.user?.id
        }/avatar`,
        formData
      );
      if (response.status === 200) {
        dispatch({ type: actions.profile.IMAGE_UPDATED, data: response.data });
      }
    } catch (err) {
      dispatch({ type: actions.profile.DATA_FETCH_ERROR, error: err.message });
    }
  };
  return (
    <>
      <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
        <img
          className="max-w-full"
          // src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user?.avatar}`}
          src={
            user?.avatar
              ? `${import.meta.env.VITE_SERVER_BASE_URL}/${user?.avatar}`
              : defaultAvatar
          }
          alt={user?.firstName}
        />

        <form>
          <button
            className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
            type="submit"
            onClick={handleImageUpload}
          >
            <img src={EditIcon} alt="Edit" />
          </button>
          <input id="file" type="file" ref={fileUploadRef} hidden />
        </form>
      </div>
    </>
  );
};

export default ProfileImage;
