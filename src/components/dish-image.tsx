import { photos } from "@/assets/photos";

export const dishImages: Record<string, string> = {
  mezze: photos.hummus,
  shish: photos.smallLambShish,
  iskender: photos.kebabPlatter,
  dessert: photos.kanafeh,
};

export const fallbackFor = (category: string) => {
  if (category === "Desserts") return photos.kanafeh;
  if (category === "Drinks") return photos.juice;
  if (category === "Seafood") return photos.grilledFish;
  if (category === "Stews" || category === "Casseroles") return photos.lambShankGravy;
  if (category === "Wraps" || category === "Burgers") return photos.quesadilla;
  if (category.includes("Starter") || category === "Salads" || category === "Vegetarian Dishes")
    return photos.springRoll;
  if (category === "Special Turkish Kebabs") return photos.kebabPlatter;
  return photos.mixedGrill;
};
