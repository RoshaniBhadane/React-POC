import React from "react";
import GridLayout from "react-grid-layout";
import { Box } from "@mui/material";
import { employeeData } from '../employeeData'
import BarChartComp from './BarChartComp'
import LineChartComp from "./LineChartComp";
import AreaChartComp from "./AreaChartComp";
import PieChartComp from "./PieChartComp";
const GridWrapper = () => {

  const layout = [
    { i: "a", x: 0, y: 0, w: 6, h: 7 },
    { i: "b", x: 6, y: 0, w: 5.5, h: 7, },
    { i: "c", x: 0, y: 0, w: 6, h: 4 },
    { i: "d", x: 6, y: 0, w: 5.5, h: 6, }
  ];

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
    >
      <Box key={"a"} style={{ color: "white", backgroundColor: "white", border: "1px solid white" }}>
        <BarChartComp data={employeeData} />
      </Box>
      <Box key={"b"} style={{ color: "white", backgroundColor: "white", border: "1px solid white" }}>
        <LineChartComp data={employeeData} /></Box>
      <Box key={"c"} style={{ color: "white", backgroundColor: "white", border: "1px solid white" }}>
        <AreaChartComp data={employeeData} />
      </Box>
      <Box key={"d"} style={{ color: "white", backgroundColor: "white", border: "1px solid white" }}>
        <PieChartComp data={employeeData} />
      </Box>
    </GridLayout>
  );
}

export default GridWrapper