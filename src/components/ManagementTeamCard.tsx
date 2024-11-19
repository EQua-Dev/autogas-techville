"use client";

import React from "react";

interface ManagementTeamCardProps {
  name: string;
  title: string;
  image: string;
  description: string;
}

const ManagementTeamCard: React.FC<ManagementTeamCardProps> = ({
  name,
  title,
  image,
  description,
}) => {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-transparent rounded-lg shadow-md">
      <div className="w-32 h-32 rounded-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg text-textcolor font-semibold mt-4">{name}</h3>
      <p className="text-sm text-textcolor">{title}</p>
      {/* <p className="text-sm text-textcolor mt-2">{description}</p> */}
    </div>
  );
};

export default ManagementTeamCard;
