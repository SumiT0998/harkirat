import { RevenueCard } from "./Components/RevenueCard";

function App() {
  return (
    <div className="grid grid-cols-4">
      <RevenueCard
        title={"Amount pending"}
        amount={"12,232,400"}
        orderCount={"190"}
      />
    </div>
  );
}

export default App;
