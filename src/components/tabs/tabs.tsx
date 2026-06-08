import "./tabs.scss";

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Tabs({
  activeTab,
  onTabChange,
}: TabsProps) {
  const tabs = [
    "Upcoming",
    "Completed",
    "Past",
  ];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tabs__item ${
            activeTab === tab
              ? "tabs__item--active"
              : ""
          }`}
          onClick={() =>
            onTabChange(tab)
          }
        >
          {tab}
        </button>
      ))}
    </div>
  );
}