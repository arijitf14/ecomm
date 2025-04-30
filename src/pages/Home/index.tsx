// src/pages/Page1.tsx
import {
  BottomTab,
  CardList,
  Header,
  Invite,
  PromoCard,
  RecentActivity,
} from "../../components/elements";

const Home = () => {
  return (
    <div className="flex flex-col h-[100dvh] bg-white overflow-hidden">
      <div className="flex-1 overflow-y-auto pb-20">
        <Header />
        <CardList />
        <RecentActivity />
        <div className="px-4">
          <Invite />
        </div>
        <div className="px-4 pb-4">
          <PromoCard />
        </div>
      </div>
      <BottomTab />
    </div>
  );
};

export default Home;
