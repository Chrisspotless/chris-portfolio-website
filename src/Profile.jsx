import React from "react";

const ProfileCard = ({
  name,
  title,
  bio,
  avatarUrl,
  hero,
}) => {
  const imageSrc = avatarUrl || hero;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-80">

      <img
        src={imageSrc}
        alt={name}
        className="w-28 h-28 rounded-full mx-auto object-cover"
      />

      <h2 className="text-2xl font-bold text-center mt-4">
        {name}
      </h2>

      <h3 className="text-blue-600 text-center">
        {title}
      </h3>

      <p className="text-gray-600 text-center mt-4">
        {bio}
      </p>

    </div>
  );
};

export default ProfileCard;