// This is the data being used for the demo

// This data has the proper structure to be used with this demo
// in real life the api could provide something different and
// the data will need to be transformed after fetching it

// Sorry if the data isn't too realistic, was short of time and basically
// wrote random numbers

// READ ME
// The recommendations data could be fetched from the api,
// or just processed in the client side that kind of data can be calculated
// based on the other stats (i.e. peak hours, bestseller)

export const dailySales = [
  { name: "M", sales: 18, avg: 19 },
  { name: "T", sales: 16, avg: 16 },
  { name: "W", sales: 14, avg: 15 },
  { name: "T", sales: 18, avg: 16 },
  { name: "F", sales: 22, avg: 20 },
  { name: "S", sales: 16, avg: 18 },
  { name: "S", sales: 23, avg: 21 }
];

export const hourlySales = {
  headers: ["hour", "today", "avg"],
  max: 3,
  rows: [
    ["9:00", 2, 3],
    ["10:00", 1, 2],
    ["11:00", 6, 5],
    ["12:00", 8, 10],
    ["1:00", 7, 5],
    ["2:00", 4, 3],
    ["3:00", 3, 3],
    ["4:00", 3, 2],
    ["5:00", 4, 4],
    ["6:00", 3, 2],
    ["7:00", 5, 4],
    ["8:00", 7, 6]
  ]
};

export const bestsellers = {
  headers: ["hour", "today", "avg"],
  max: 3,
  rows: [
    ["9:00", "DishA (2)", "DishA (3)"],
    ["10:00", "DishA (2)", "DishA (3)"],
    ["11:00", "DishA (2)", "DishA (3)"],
    ["12:00", "DishA (2)", "DishA (3)"],
    ["1:00", "DishA (2)", "DishA (3)"],
    ["2:00", "DishA (2)", "DishA (3)"],
    ["3:00", "DishA (2)", "DishA (3)"],
    ["4:00", "DishA (2)", "DishA (3)"],
    ["5:00", "DishA (2)", "DishA (3)"],
    ["6:00", "DishA (2)", "DishA (3)"],
    ["7:00", "DishA (2)", "DishA (3)"],
    ["8:00", "DishA (2)", "DishA (3)"]
  ]
};

export const recommends = [
  "Your peak hour is 12:00",
  "Your bestseller is DishA",
  "For 12:00-1:00 we recommend you have 6 DishA ready for your customers",
  "Your sales whis weeks has been higher than the previous one, Good job!"
];
