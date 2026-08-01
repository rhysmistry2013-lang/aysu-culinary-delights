export type Diet = "vegetarian" | "vegan" | "gluten-free" | "halal";

export type MenuItem = {
  id: string;
  no?: number;
  name: string;
  description: string;
  price?: number;
  priceLarge?: number;
  category: string;
  diets: Diet[];
  spice: 0 | 1 | 2 | 3;
  allergens: string[];
  popular?: boolean;
  image?: string;
};

export const categories = [
  "Cold Starters",
  "Hot Starters",
  "Sharing Platters",
  "Kebabs & Grills",
  "Special Turkish Kebabs",
  "Vegetarian Dishes",
  "Seafood",
  "Daily Stews",
  "Burgers",
  "Wraps",
  "Salads",
  "Sides & Extras",
  "Breakfast & Brunch",
  "Omelettes",
  "Desserts",
  "Drinks",
] as const;

const H: Diet[] = ["halal"];
const V: Diet[] = ["vegetarian", "halal"];
const VG: Diet[] = ["vegetarian", "vegan", "halal"];

let seq = 0;
const id = () => `item-${++seq}`;

export const menu: MenuItem[] = [
  // Cold starters
  { id: id(), no: 1, name: "Hummus", description: "Crushed chickpeas with tahini, garlic, lemon and olive oil.", price: 5.5, category: "Cold Starters", diets: VG, spice: 0, allergens: ["Sesame"], popular: true },
  { id: id(), no: 2, name: "Cacık", description: "Cucumber, mint and a hint of garlic in creamy yoghurt.", price: 5.5, category: "Cold Starters", diets: V, spice: 0, allergens: ["Milk"] },
  { id: id(), no: 3, name: "Potato (Russian) Salad", description: "Potatoes, carrots, peas, eggs and gherkins mixed with mayonnaise.", price: 5.5, category: "Cold Starters", diets: V, spice: 0, allergens: ["Egg", "Mustard"] },
  { id: id(), no: 4, name: "Tarama Salad", description: "Freshly prepared whipped cod roe.", price: 5.5, category: "Cold Starters", diets: H, spice: 0, allergens: ["Fish", "Gluten"] },
  { id: id(), no: 5, name: "Aubergine Salad", description: "Thin slices of aubergine mixed with potatoes, onions and peppers in tomato sauce.", price: 5.5, category: "Cold Starters", diets: VG, spice: 0, allergens: [] },
  { id: id(), no: 6, name: "Vine Leaves", description: "Vine leaves stuffed with a mixture of rice and herbs.", price: 5.5, category: "Cold Starters", diets: VG, spice: 0, allergens: [] },
  { id: id(), no: 7, name: "Feta Cheese", description: "Greek cheese served with tomato and cucumber.", price: 5.5, category: "Cold Starters", diets: V, spice: 0, allergens: ["Milk"] },
  { id: id(), no: 8, name: "Baba Ganoush", description: "Aubergine, yoghurt, tahini, garlic and lemon.", price: 5.5, category: "Cold Starters", diets: V, spice: 0, allergens: ["Milk", "Sesame"] },
  { id: id(), no: 9, name: "Pickles & Mixed Olives", description: "Black and green olives, gherkins and chilli pickles.", price: 5.5, category: "Cold Starters", diets: VG, spice: 1, allergens: [] },
  { id: id(), no: 10, name: "Mix Cold Starter", description: "Hummus, cacık, potato salad, tarama salad and aubergine salad.", price: 14.5, category: "Cold Starters", diets: H, spice: 0, allergens: ["Milk", "Fish", "Sesame", "Egg"], popular: true, image: "mezze" },

  // Hot starters
  { id: id(), no: 11, name: "Falafel", description: "Ground, spiced chickpeas shaped into balls and fried.", price: 5.9, category: "Hot Starters", diets: VG, spice: 0, allergens: ["Sesame"] },
  { id: id(), no: 12, name: "Halloumi", description: "Grilled Cypriot cheese.", price: 6.5, category: "Hot Starters", diets: V, spice: 0, allergens: ["Milk"], popular: true },
  { id: id(), no: 13, name: "Calamari", description: "Deep-fried fresh squid rings.", price: 6.9, category: "Hot Starters", diets: H, spice: 0, allergens: ["Molluscs", "Gluten"], popular: true },
  { id: id(), no: 14, name: "Börek (Spring Rolls)", description: "Pastry filled with feta cheese and parsley.", price: 6.9, category: "Hot Starters", diets: V, spice: 0, allergens: ["Gluten", "Milk"] },
  { id: id(), no: 15, name: "Sucuk", description: "Grilled Turkish sausage.", price: 6.5, category: "Hot Starters", diets: H, spice: 1, allergens: [] },
  { id: id(), no: 16, name: "Halloumi & Sucuk", description: "Grilled halloumi with Turkish sausage.", price: 6.9, category: "Hot Starters", diets: H, spice: 1, allergens: ["Milk"] },
  { id: id(), no: 17, name: "Lahmacun", description: "Very thin Turkish pizza with minced lamb topping.", price: 6.5, category: "Hot Starters", diets: H, spice: 1, allergens: ["Gluten"] },
  { id: id(), no: 18, name: "Soup of the Day", description: "Freshly prepared daily — please ask your server.", price: 5.5, category: "Hot Starters", diets: H, spice: 0, allergens: ["Ask staff"] },
  { id: id(), no: 19, name: "Crispy King Prawns", description: "Deep-fried king prawns, 5 pcs, served with sweet chilli.", price: 6.9, category: "Hot Starters", diets: H, spice: 1, allergens: ["Crustaceans", "Gluten"] },
  { id: id(), no: 20, name: "Whitebait", description: "Deep-fried white bait, served with tartare sauce.", price: 6.9, category: "Hot Starters", diets: H, spice: 0, allergens: ["Fish", "Gluten", "Egg"] },
  { id: id(), no: 21, name: "Garlic Mushrooms", description: "Sliced mushrooms, pan fried with cream and cheddar cheese.", price: 7.5, category: "Hot Starters", diets: V, spice: 0, allergens: ["Milk"] },
  { id: id(), no: 22, name: "Mix Hot Starter", description: "Falafel, halloumi, calamari, börek and sucuk.", price: 15.9, category: "Hot Starters", diets: H, spice: 1, allergens: ["Milk", "Gluten", "Molluscs"] },
  { id: id(), no: 23, name: "Chef Starter", description: "Hummus, cacık, potato salad, tarama salad, falafel, halloumi, börek and beyti.", price: 18.9, category: "Hot Starters", diets: H, spice: 1, allergens: ["Milk", "Gluten", "Fish", "Sesame"] },

  // Kebabs & grills
  { id: id(), no: 24, name: "Lamb Doner", description: "Spit-roasted, especially prepared lamb. Served with rice, bulgur, salad and bread.", price: 12.5, priceLarge: 12.6, category: "Kebabs & Grills", diets: H, spice: 0, allergens: ["Gluten"], popular: true },
  { id: id(), no: 25, name: "Chicken Doner", description: "Spit-roasted, especially prepared chicken.", price: 12.5, category: "Kebabs & Grills", diets: H, spice: 0, allergens: ["Gluten"] },
  { id: id(), no: 26, name: "Mixed Doner", description: "Mix of lamb and chicken doner.", price: 13.0, category: "Kebabs & Grills", diets: H, spice: 0, allergens: ["Gluten"] },
  { id: id(), no: 27, name: "Lamb Kofte (Adana)", description: "Marinated minced lamb, grilled on charcoal.", price: 10.6, priceLarge: 14.5, category: "Kebabs & Grills", diets: H, spice: 2, allergens: ["Gluten"] },
  { id: id(), no: 28, name: "Chicken Kofte", description: "Marinated minced chicken, grilled on charcoal.", price: 10.5, priceLarge: 14.5, category: "Kebabs & Grills", diets: H, spice: 2, allergens: ["Gluten"] },
  { id: id(), no: 29, name: "Mixed Kofte", description: "Mix of lamb and chicken kofte.", price: 14.9, category: "Kebabs & Grills", diets: H, spice: 2, allergens: ["Gluten"] },
  { id: id(), no: 30, name: "Lamb Shish", description: "Marinated cubes of lamb, grilled on charcoal.", price: 11.5, priceLarge: 17.5, category: "Kebabs & Grills", diets: H, spice: 0, allergens: ["Gluten"], popular: true, image: "shish" },
  { id: id(), no: 31, name: "Chicken Shish", description: "Marinated cubes of chicken breast, grilled on charcoal.", price: 11.5, priceLarge: 15.5, category: "Kebabs & Grills", diets: H, spice: 0, allergens: ["Gluten"], popular: true },
  { id: id(), no: 32, name: "Mixed Shish", description: "Mix of lamb and chicken shish.", price: 17.5, category: "Kebabs & Grills", diets: H, spice: 0, allergens: ["Gluten"] },
  { id: id(), no: 33, name: "Lamb Ribs", description: "Seasoned lamb ribs, 8 pcs, grilled on charcoal.", price: 17.9, category: "Kebabs & Grills", diets: H, spice: 0, allergens: [] },
  { id: id(), no: 34, name: "Lamb Chops", description: "Seasoned lamb chops, 4 pcs, grilled on charcoal.", price: 19.9, category: "Kebabs & Grills", diets: H, spice: 0, allergens: [] },
  { id: id(), no: 35, name: "Mixed Ribs & Chops", description: "Lamb ribs 4 pcs and lamb chops 2 pcs.", price: 19.9, category: "Kebabs & Grills", diets: H, spice: 0, allergens: [] },
  { id: id(), no: 36, name: "Chicken Wings", description: "Marinated chicken wings, 8 pcs, grilled on charcoal.", price: 13.5, category: "Kebabs & Grills", diets: H, spice: 1, allergens: [] },
  { id: id(), no: 37, name: "Boneless Chicken Leg Steak", description: "Tender chicken fillet steak, grilled on charcoal.", price: 13.5, category: "Kebabs & Grills", diets: H, spice: 0, allergens: [] },
  { id: id(), no: 38, name: "Chicken Delight", description: "Chicken shish, chicken kofte and chicken wings.", price: 13.5, category: "Kebabs & Grills", diets: H, spice: 1, allergens: ["Gluten"] },
  { id: id(), no: 39, name: "Mix Grill", description: "Lamb shish, chicken shish and lamb kofte.", price: 21.5, category: "Kebabs & Grills", diets: H, spice: 1, allergens: ["Gluten"], popular: true },
  { id: id(), no: 40, name: "Mix Kebab", description: "Lamb shish, chicken shish, lamb kofte and chicken kofte.", price: 24.9, category: "Kebabs & Grills", diets: H, spice: 1, allergens: ["Gluten"] },

  // Special Turkish kebabs
  { id: id(), no: 41, name: "İskender", description: "Lamb or chicken doner on a bed of bread with yoghurt and tomato butter sauce.", price: 15.5, category: "Special Turkish Kebabs", diets: H, spice: 0, allergens: ["Gluten", "Milk"], popular: true, image: "iskender" },
  { id: id(), no: 42, name: "Yoghurt Lamb Shish", description: "Cubes of lamb bedded on a slice of bread with yoghurt and tomato butter sauce.", price: 18.9, category: "Special Turkish Kebabs", diets: H, spice: 0, allergens: ["Gluten", "Milk"] },
  { id: id(), no: 43, name: "Yoghurt Chicken Shish", description: "Cubes of chicken bedded on a slice of bread with yoghurt and tomato butter sauce.", price: 17.9, category: "Special Turkish Kebabs", diets: H, spice: 0, allergens: ["Gluten", "Milk"] },
  { id: id(), no: 44, name: "Yoghurt Lamb Kofte", description: "Minced lamb on a bed of bread with yoghurt and tomato butter sauce.", price: 18.9, category: "Special Turkish Kebabs", diets: H, spice: 2, allergens: ["Gluten", "Milk"] },
  { id: id(), no: 45, name: "Yoghurt Chicken Kofte", description: "Minced chicken on a bed of bread with yoghurt and tomato butter sauce.", price: 16.5, category: "Special Turkish Kebabs", diets: H, spice: 2, allergens: ["Gluten", "Milk"] },
  { id: id(), no: 46, name: "Sarma Beyti", description: "Minced lamb or chicken on thin bread with cheese, yoghurt and tomato butter sauce.", price: 17.9, category: "Special Turkish Kebabs", diets: H, spice: 1, allergens: ["Gluten", "Milk"] },
  { id: id(), no: 47, name: "Ali Nazik", description: "Grilled lamb or chicken with yoghurt, aubergine and tomato butter sauce dressing.", price: 19.5, category: "Special Turkish Kebabs", diets: H, spice: 0, allergens: ["Milk"] },

  // Sharing platters
  { id: id(), name: "Chef's Special", description: "Lamb shish, chicken shish, lamb kofte, chicken kofte, lamb doner and chicken doner. Serves 2–3.", price: 36.9, category: "Sharing Platters", diets: H, spice: 1, allergens: ["Gluten"] },
  { id: id(), name: "Chicken Special", description: "Chicken doner, chicken shish, chicken kofte, chicken wings, boneless chicken leg and chicken wings. Serves 3–4.", price: 49.9, category: "Sharing Platters", diets: H, spice: 1, allergens: ["Gluten"] },
  { id: id(), name: "Aysu Special", description: "Lamb shish, chicken shish, lamb kofte, chicken kofte, lamb doner, chicken doner and chicken wings. Serves 3–4.", price: 49.9, category: "Sharing Platters", diets: H, spice: 1, allergens: ["Gluten"], popular: true },
  { id: id(), name: "Fish Platter", description: "Grilled salmon, whole sea bass, calamari 4 pcs, crispy prawns, king prawns and white bait. Serves 3–4.", price: 49.9, category: "Sharing Platters", diets: H, spice: 0, allergens: ["Fish", "Crustaceans", "Molluscs", "Gluten"] },
  { id: id(), name: "Family Special", description: "Lamb shish, chicken shish, lamb kofte, chicken kofte, lamb doner, chicken doner, chicken wings 8 pcs, lamb ribs 4 pcs and lamb chops 2 pcs. Serves 4–5.", price: 64.5, category: "Sharing Platters", diets: H, spice: 1, allergens: ["Gluten"], popular: true },
  { id: id(), name: "Jumbo Platter", description: "Lamb shish, chicken shish, lamb kofte, chicken kofte, lamb doner, chicken doner, chicken wings 8 pcs, lamb ribs 8 pcs and lamb chops 4 pcs. Serves 5–6.", price: 79.9, category: "Sharing Platters", diets: H, spice: 1, allergens: ["Gluten"] },

  // Vegetarian
  { id: id(), no: 48, name: "Falafel Plate", description: "Ground, spiced chickpeas shaped into balls and fried, served with rice or chips.", price: 10.6, category: "Vegetarian Dishes", diets: VG, spice: 0, allergens: ["Sesame"] },
  { id: id(), no: 49, name: "Halloumi Plate", description: "Grilled Cypriot cheese, served with rice or chips.", price: 11.9, category: "Vegetarian Dishes", diets: V, spice: 0, allergens: ["Milk"] },
  { id: id(), no: 50, name: "Mixed Halloumi & Falafel", description: "Grilled halloumi with falafel, served with rice or chips.", price: 11.9, category: "Vegetarian Dishes", diets: V, spice: 0, allergens: ["Milk", "Sesame"] },
  { id: id(), no: 51, name: "Vegetarian İskender", description: "Grilled aubergine, red and green peppers, mushrooms and halloumi on a bed of bread with yoghurt and tomato butter sauce.", price: 12.9, category: "Vegetarian Dishes", diets: V, spice: 0, allergens: ["Gluten", "Milk"] },
  { id: id(), no: 52, name: "Vegetarian Skewer", description: "Chargrilled seasonal vegetable skewer, served with rice or chips.", price: 12.9, category: "Vegetarian Dishes", diets: VG, spice: 0, allergens: [] },
  { id: id(), no: 53, name: "Vegetarian Moussaka", description: "Layers of aubergine, potatoes, onions and peppers baked with tomato sauce.", price: 12.9, category: "Vegetarian Dishes", diets: V, spice: 0, allergens: ["Milk"] },

  // Seafood
  { id: id(), no: 54, name: "Sea Bass", description: "Whole sea bass, grilled on charcoal, served with salad and rice or chips.", price: 17.9, category: "Seafood", diets: H, spice: 0, allergens: ["Fish"] },
  { id: id(), no: 55, name: "Salmon", description: "Salmon fillet, grilled on charcoal, served with salad and rice or chips.", price: 17.9, category: "Seafood", diets: H, spice: 0, allergens: ["Fish"] },
  { id: id(), no: 56, name: "King Prawn", description: "King prawns, grilled on charcoal, served with salad and rice or chips.", price: 17.9, category: "Seafood", diets: H, spice: 0, allergens: ["Crustaceans"] },
  { id: id(), no: 57, name: "Calamari Main", description: "Deep-fried fresh squid, served with salad and chips.", price: 13.5, category: "Seafood", diets: H, spice: 0, allergens: ["Molluscs", "Gluten"] },

  // Daily stews
  { id: id(), no: 58, name: "Lamb Stew", description: "Slow-cooked lamb casserole with rice, bread and salad.", price: 15.9, category: "Daily Stews", diets: H, spice: 0, allergens: ["Gluten"], popular: true },
  { id: id(), no: 59, name: "Chicken Stew", description: "Slow-cooked chicken casserole with rice, bread and salad.", price: 13.9, category: "Daily Stews", diets: H, spice: 0, allergens: ["Gluten"] },
  { id: id(), no: 60, name: "Lentil & Veal", description: "Home-style lentils with veal, served with rice and bread.", price: 12.9, category: "Daily Stews", diets: H, spice: 0, allergens: ["Gluten"] },
  { id: id(), no: 61, name: "Mixed Moussaka", description: "Aubergine, potato, minced meat and vegetables baked in tomato sauce.", price: 13.9, category: "Daily Stews", diets: H, spice: 0, allergens: ["Milk"] },

  // Burgers
  { id: id(), name: "1/4 Pounder", description: "Quarter-pound beef burger with cheese and chips.", price: 7.5, category: "Burgers", diets: H, spice: 0, allergens: ["Gluten", "Milk"] },
  { id: id(), name: "1/2 Pounder", description: "Half-pound beef burger with cheese and chips.", price: 8.5, category: "Burgers", diets: H, spice: 0, allergens: ["Gluten", "Milk"] },
  { id: id(), name: "Veggie Burger", description: "Vegetable patty with cheese and chips.", price: 7.9, category: "Burgers", diets: V, spice: 0, allergens: ["Gluten", "Milk"] },
  { id: id(), name: "Chicken Fillet Burger", description: "Chicken fillet burger with cheese and chips.", price: 8.5, category: "Burgers", diets: H, spice: 0, allergens: ["Gluten", "Milk"] },
  { id: id(), name: "Nuggets 7 pcs & Chips", description: "Seven chicken nuggets served with chips — a children's favourite.", price: 7.5, category: "Burgers", diets: H, spice: 0, allergens: ["Gluten"] },

  // Wraps
  { id: id(), no: 78, name: "Doner Wrap", description: "Lamb or chicken doner in a warm wrap with salad and sauces.", price: 9.0, priceLarge: 10.5, category: "Wraps", diets: H, spice: 0, allergens: ["Gluten"] },
  { id: id(), no: 79, name: "Kofte Wrap", description: "Lamb or chicken kofte in a warm wrap with salad and sauces.", price: 9.0, priceLarge: 10.5, category: "Wraps", diets: H, spice: 2, allergens: ["Gluten"] },
  { id: id(), no: 80, name: "Shish Wrap", description: "Lamb or chicken shish in a warm wrap with salad and sauces.", price: 10.5, priceLarge: 14.9, category: "Wraps", diets: H, spice: 0, allergens: ["Gluten"] },
  { id: id(), no: 81, name: "Mixed Doner Wrap", description: "Lamb and chicken doner in a warm wrap.", price: 11.3, category: "Wraps", diets: H, spice: 0, allergens: ["Gluten"] },
  { id: id(), no: 82, name: "Mixed Kofte Wrap", description: "Lamb and chicken kofte in a warm wrap.", price: 13.5, category: "Wraps", diets: H, spice: 2, allergens: ["Gluten"] },
  { id: id(), no: 83, name: "Mixed Shish Wrap", description: "Lamb and chicken shish in a warm wrap.", price: 13.5, category: "Wraps", diets: H, spice: 0, allergens: ["Gluten"] },
  { id: id(), no: 84, name: "Falafel or Halloumi Wrap", description: "Falafel or grilled halloumi in a warm wrap with salad.", price: 7.9, category: "Wraps", diets: V, spice: 0, allergens: ["Gluten", "Milk"] },
  { id: id(), no: 85, name: "Mixed Falafel & Halloumi Wrap", description: "Falafel and grilled halloumi in a warm wrap with salad.", price: 8.5, category: "Wraps", diets: V, spice: 0, allergens: ["Gluten", "Milk"] },

  // Salads
  { id: id(), no: 62, name: "House Salad", description: "Lettuce, tomatoes, cucumbers, parsley, red cabbage, carrots, mixed leaves, olives, gherkins and peppers.", price: 5.9, category: "Salads", diets: VG, spice: 0, allergens: [] },
  { id: id(), no: 63, name: "Şakşuka Salad", description: "Tomatoes, cucumbers, onions, parsley, lettuce and olive oil.", price: 4.9, category: "Salads", diets: VG, spice: 0, allergens: [] },
  { id: id(), no: 64, name: "Ezme Salad", description: "Tomatoes, green peppers, garlic and pepper flakes, parsley, onions and olive oil.", price: 7.9, category: "Salads", diets: VG, spice: 2, allergens: [] },
  { id: id(), no: 65, name: "Avocado Salad", description: "Avocado, lettuce, tomatoes, cucumber, rocket and olives.", price: 8.5, category: "Salads", diets: VG, spice: 0, allergens: [] },

  // Sides
  { id: id(), no: 67, name: "Chips", description: "Golden fries. Small or large.", price: 2.6, priceLarge: 2.9, category: "Sides & Extras", diets: VG, spice: 0, allergens: [] },
  { id: id(), no: 68, name: "Cheese Chips", description: "Fries topped with melted cheese. Small or large.", price: 2.9, priceLarge: 3.9, category: "Sides & Extras", diets: V, spice: 0, allergens: ["Milk"] },
  { id: id(), no: 69, name: "Rice", description: "Buttered Turkish rice. Small or large.", price: 2.5, priceLarge: 3.5, category: "Sides & Extras", diets: V, spice: 0, allergens: ["Milk"] },
  { id: id(), no: 70, name: "Couscous", description: "Seasoned bulgur couscous. Small or large.", price: 2.5, priceLarge: 3.5, category: "Sides & Extras", diets: VG, spice: 0, allergens: ["Gluten"] },
  { id: id(), no: 71, name: "Side Salad", description: "Fresh mixed salad. Small or large.", price: 2.5, priceLarge: 3.5, category: "Sides & Extras", diets: VG, spice: 0, allergens: [] },
  { id: id(), no: 72, name: "Yoghurt", description: "Creamy natural yoghurt.", price: 4.9, category: "Sides & Extras", diets: V, spice: 0, allergens: ["Milk"] },

  // Breakfast & brunch
  { id: id(), name: "Classic Pancakes", description: "Fluffy pancakes served with maple syrup, butter and seasonal fruit.", price: 8.9, category: "Breakfast & Brunch", diets: V, spice: 0, allergens: ["Gluten", "Egg", "Milk"] },
  { id: id(), name: "Nutella Pancakes", description: "Fluffy pancakes with Nutella and fresh strawberries.", price: 8.9, category: "Breakfast & Brunch", diets: V, spice: 0, allergens: ["Gluten", "Egg", "Milk", "Nuts"] },
  { id: id(), name: "Granola & Yoghurt Bowl", description: "Greek yoghurt served with crunchy granola, honey and seasonal fruit.", price: 7.9, category: "Breakfast & Brunch", diets: V, spice: 0, allergens: ["Milk", "Gluten", "Nuts"] },
  { id: id(), name: "Porridge", description: "Creamy oat porridge served with honey, banana, seasonal berries and nuts.", price: 6.9, category: "Breakfast & Brunch", diets: V, spice: 0, allergens: ["Gluten", "Milk", "Nuts"] },
  { id: id(), name: "Kids Breakfast", description: "Two fried eggs served with beans, chips or potatoes and toasted bread.", price: 6.9, category: "Breakfast & Brunch", diets: V, spice: 0, allergens: ["Egg", "Gluten"] },
  { id: id(), name: "English Breakfast", description: "Two eggs (fried, scrambled or poached), halal sausage, turkey bacon, mushrooms, grilled tomatoes, hash browns, beans, pancake, seasonal fruit and bread.", price: 11.9, category: "Breakfast & Brunch", diets: H, spice: 0, allergens: ["Egg", "Gluten", "Milk"], popular: true },
  { id: id(), name: "Aysu Breakfast", description: "Two eggs, mushroom, avocado, börek, halloumi, falafel, beans, hash browns, seasonal fruit and bread.", price: 12.9, category: "Breakfast & Brunch", diets: V, spice: 0, allergens: ["Egg", "Gluten", "Milk"] },
  { id: id(), name: "Turkish Breakfast", description: "Two eggs, feta cheese, halloumi cheese, börek, sucuk, butter, honey, jam, Nutella, tomato, cucumber, olive and seasonal fruit.", price: 12.9, category: "Breakfast & Brunch", diets: H, spice: 0, allergens: ["Egg", "Gluten", "Milk", "Nuts"] },
  { id: id(), name: "Sharing Turkish Breakfast", description: "Scrambled eggs, feta cheese, halloumi cheese, börek, sucuk, avocado, hash browns, chips, mushrooms, grilled aubergine, fresh tomato, cucumber, olives, yoghurt, butter, seasonal fruits, honey, jam, kaymak, Nutella and bread. £22.00 for 2 people, £39.00 for 4 people.", price: 22.0, priceLarge: 39.0, category: "Breakfast & Brunch", diets: H, spice: 0, allergens: ["Egg", "Gluten", "Milk", "Nuts"], popular: true },
  { id: id(), name: "Crushed Avocado", description: "Sourdough bread topped with crushed avocado and poached egg, served with salad and seasonal fruit.", price: 9.9, category: "Breakfast & Brunch", diets: V, spice: 0, allergens: ["Gluten", "Egg"] },
  { id: id(), name: "Eggs Royale", description: "Two poached eggs with smoked salmon and hollandaise sauce on sliced sourdough toast, served with salad and seasonal fruit.", price: 11.9, category: "Breakfast & Brunch", diets: H, spice: 0, allergens: ["Fish", "Egg", "Gluten", "Milk"] },
  { id: id(), name: "Egg Florentine", description: "Two poached eggs with sautéed spinach and hollandaise sauce on sliced sourdough toast, served with salad and seasonal fruit.", price: 10.9, category: "Breakfast & Brunch", diets: V, spice: 0, allergens: ["Egg", "Gluten", "Milk"] },
  { id: id(), name: "Turkish Eggs (Çılbır)", description: "Creamy yoghurt topped with two poached eggs and a garlic herb butter sauce, served with salad, seasonal fruit and bread.", price: 10.9, category: "Breakfast & Brunch", diets: V, spice: 0, allergens: ["Egg", "Milk", "Gluten"] },
  { id: id(), name: "Shakshuka", description: "Poached eggs cooked in a rich tomato and pepper sauce with herbs and spices, served with bread and seasonal fruit.", price: 10.5, category: "Breakfast & Brunch", diets: V, spice: 1, allergens: ["Egg", "Gluten"] },

  // Omelettes
  { id: id(), name: "Cheese Omelette", description: "Three-egg omelette with melted cheese, served with chips and salad.", price: 8.9, category: "Omelettes", diets: V, spice: 0, allergens: ["Egg", "Milk"] },
  { id: id(), name: "Mushroom Omelette", description: "Three-egg omelette with sautéed mushrooms and herbs, served with chips and salad.", price: 9.5, category: "Omelettes", diets: V, spice: 0, allergens: ["Egg"] },
  { id: id(), name: "Veggie Omelette", description: "Three-egg omelette with mixed vegetables, tomato and herbs, served with chips and salad.", price: 9.5, category: "Omelettes", diets: V, spice: 0, allergens: ["Egg"] },
  { id: id(), name: "Spinach Omelette", description: "Three-egg omelette with sautéed spinach and herbs, served with chips and salad.", price: 9.5, category: "Omelettes", diets: V, spice: 0, allergens: ["Egg"] },
  { id: id(), name: "Turkish Omelette (Sucuk)", description: "Three-egg omelette with Turkish sausage, served with chips and salad.", price: 10.9, category: "Omelettes", diets: H, spice: 1, allergens: ["Egg"] },

  // Desserts — placeholder pricing
  { id: id(), name: "Baklava", description: "Layered filo pastry with pistachio and syrup. Placeholder — price to be confirmed.", category: "Desserts", diets: V, spice: 0, allergens: ["Gluten", "Nuts", "Milk"], image: "dessert" },
  { id: id(), name: "Künefe", description: "Shredded pastry with melted cheese and syrup, served warm. Placeholder — price to be confirmed.", category: "Desserts", diets: V, spice: 0, allergens: ["Gluten", "Milk"] },
  { id: id(), name: "Tiramisu Cake", description: "Classic tiramisu, listed as a customer favourite. Placeholder — price to be confirmed.", category: "Desserts", diets: V, spice: 0, allergens: ["Gluten", "Egg", "Milk"], popular: true },

  // Drinks — placeholder pricing
  { id: id(), name: "Turkish Tea", description: "Traditional çay served in a tulip glass. Placeholder — price to be confirmed.", category: "Drinks", diets: VG, spice: 0, allergens: [] },
  { id: id(), name: "Turkish Coffee", description: "Finely ground coffee brewed in a cezve. Placeholder — price to be confirmed.", category: "Drinks", diets: VG, spice: 0, allergens: [] },
  { id: id(), name: "Ayran", description: "Chilled salted yoghurt drink. Placeholder — price to be confirmed.", category: "Drinks", diets: V, spice: 0, allergens: ["Milk"] },
  { id: id(), name: "Fresh Juice", description: "Freshly squeezed seasonal juice. Placeholder — price to be confirmed.", category: "Drinks", diets: VG, spice: 0, allergens: [] },
  { id: id(), name: "Espresso Martini", description: "House cocktail, listed as a customer favourite. Placeholder — price to be confirmed.", category: "Drinks", diets: [], spice: 0, allergens: [] },
];

export const allergenList = [
  "Gluten",
  "Milk",
  "Egg",
  "Fish",
  "Crustaceans",
  "Molluscs",
  "Nuts",
  "Sesame",
  "Mustard",
];