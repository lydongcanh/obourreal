import { AreaChart } from "@mantine/charts";
import { data } from "./data.ts";

function App() {
  return (
    <div style={{ padding: 24 }}>
      <AreaChart
        h={300}
        data={data}
        dataKey="date"
        series={[
          { name: "Apples", color: "indigo.6" },
          { name: "Oranges", color: "blue.6" },
          { name: "Tomatoes", color: "teal.6" },
        ]}
        curveType="linear"
        style={{ maxWidth: 500 }}
      />
    </div>
  );
}

export default App;
