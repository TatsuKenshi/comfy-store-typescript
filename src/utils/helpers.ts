export const formatPrice = (number: number): number => {
  const newNumber = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
  return Number(newNumber);
};

// rework getUniqueValues to work without sets
export const getUniqueValues = (data: [], type: string): string[] => {
  let unique: string[] = data.map((item) => item[type]);

  if (type === "colors") {
    unique = unique.flat();

    return ["all", ...new Set(unique)];
  }

  return ["all", ...new Set(unique)].sort();
};

export const capitalizeTitle = (title: string): string => {
  const array = title.split(" ");

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
  }

  const newTitle = array.join(" ");

  return newTitle;
};
