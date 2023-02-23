import { ProductType } from "../app/types";

export const formatPrice = (number: number): string => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = (
  data: ProductType[],
  iterationProp: "category" | "colors" | "company"
): string[] => {
  // unique array is a string array
  // first we map over the data ProductType array
  // then we flatten it because colors are arrays of arrays
  let unique: string[] = data
    .map((item: ProductType) => item[iterationProp])
    .flat();

  // uniqueArray is a string array with unique values
  const uniqueArray = ["all"];

  // if we're iterating over the colors property
  if (iterationProp === "colors") {
    for (let i = 0; i < unique.length; i++) {
      if (!uniqueArray.includes(unique[i])) {
        uniqueArray.push(unique[i]);
      }
    }
    return uniqueArray;
  }

  // iterating over the category or company properties doesn't require an if statement
  for (let i = 0; i < unique.length; i++) {
    if (!uniqueArray.includes(unique[i])) {
      uniqueArray.push(unique[i]);
    }
  }

  return uniqueArray;
};

export const capitalizeTitle = (title: string): string => {
  const array = title.split(" ");

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }

  const newTitle = array.join(" ");

  return newTitle;
};
