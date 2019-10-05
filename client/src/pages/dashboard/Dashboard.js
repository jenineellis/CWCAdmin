import React, { useState } from "react";
import { Grid, LinearProgress, Select, OutlinedInput, MenuItem, } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { ResponsiveContainer, ComposedChart, AreaChart, LineChart, Line, Area, PieChart, Pie, Cell, YAxis, XAxis, } from "recharts";
import style from "./styles";
import mock from "./mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import Table from "./components/producerTable/Table";
import BigStat from "./components/BigStat/BigStat";

// const mainChartData = getMainChartData();
// const PieChartData = [
//   { name: "Group A", value: 400, color: "primary" },
//   { name: "Group B", value: 300, color: "secondary" },
//   { name: "Group C", value: 300, color: "warning" },
//   { name: "Group D", value: 200, color: "success" },
// ];

export default function Dashboard(props) {
  var classes = style();
  var theme = useTheme();

  // local
  var [mainChartState, setMainChartState] = useState("monthly");

  return (
    <>
      <PageTitle title="Dashboard" button="Latest Reports" />
      <Grid container spacing={4}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
        </Grid>
        <Grid item xs={12}>
        </Grid>
        {mock.bigStat.map(stat => (
          <Grid item md={4} sm={6} xs={12} key={stat.product}>
            <BigStat {...stat} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Widget
            title="Producers"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableWidget}
          >
            <Table data={mock.table} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
  var array = new Array(length).fill();
  let lastValue;

  return array.map((item, index) => {
    let randomValue = Math.floor(Math.random() * multiplier + 1);

    while (
      randomValue <= min ||
      randomValue >= max ||
      (lastValue && randomValue - lastValue > maxDiff)
    ) {
      randomValue = Math.floor(Math.random() * multiplier + 1);
    }

    lastValue = randomValue;

    return { value: randomValue };
  });
}

// function getMainChartData() {
//   var resultArray = [];
//   var Whites = getRandomData(31, 3500, 6500, 7500, 1000);
//   var Reds = getRandomData(31, 1500, 7500, 7500, 1500);
//   var Sparkeling = getRandomData(31, 1500, 7500, 7500, 1500);
//   var Rose = getRandomData(31, 1500, 7500, 7500, 1500);

//   for (let i = 0; i < wine.length; i++) {
//     resultArray.push({
//       Red: Red[i].value,
//       White: White[i].value,
//       Sparkeling: Sparkeling[i].value,
//       Rose: Rose[i].value,
//     });
//   }

  // return resultArray;
// }