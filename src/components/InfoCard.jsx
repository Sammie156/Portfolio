import WindowCard from "./WindowCard";

const InfoCard = ({ className }) => {
  const profileData = [
    { key: "USER", value: "Samanwaya Datta" },
    { key: "STATUS", value: "B. Tech Student (3rd year, 6th Semester)" },
    { key: "FOCUS", value: "Systems and Art" },
  ];

  return (
    <WindowCard
      filename="user_profile.sys"
      className={`w-125 ${className}`}
      windowClass="bg-blue-600" // A distinct blue header for "System" info
    >
      <div className="p-4 bg-white text-black transition-colors">
        <div className="space-y-3">
          {profileData.map((item, index) => (
            <div
              key={index}
              className="flex border-b border-gray-200 dark:border-zinc-700 pb-1 last:border-0"
            >
              <span className="font-mono text-md font-bold text-gray-900 w-24 uppercase">
                {item.key}
              </span>
              <span className="font-mono text-md font-bold text-black truncate">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </WindowCard>
  );
};

export default InfoCard;
