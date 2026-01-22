// Sample product data
const wholeLeafImage = new URL('../../images/whole Leaf.png', import.meta.url).href;
const mediumLeafImage = new URL('../../images/Medium Leaf.png', import.meta.url).href;
const madhubanGranulatedImage = new URL('../../images/Madhuban 500gr.png', import.meta.url).href;
const ctcLeafImage = new URL('../../images/CTC+Leaf 500gr.png', import.meta.url).href;
const championGranulatedImage = new URL('../../images/Champion.png', import.meta.url).href;
const indianGranulatedImage = new URL('../../images/indian.jpeg', import.meta.url).href;
const masalaTeaImage = new URL('../../images/masala tea.png', import.meta.url).href;
const indianCtcImage = new URL('../../images/CTC tea.png', import.meta.url).href;
const healthTeaImage = new URL('../../images/for health.png', import.meta.url).href;
const greenTeaLeafImage = new URL('../../images/greenTea.png', import.meta.url).href;
const jasmineGreenTeaImage = new URL('../../images/greenTeaJasmine.webp', import.meta.url).href;
const blackTeaLemonImage = new URL('../../images/lemonTea.png', import.meta.url).href;
const karakTeaImage = new URL('../../images/karakTea.png', import.meta.url).href;
const atkenTeaImage = new URL('../../images/atkenTea.png', import.meta.url).href;
const blackTeaBagsImage = new URL('../../images/bags100.png', import.meta.url).href;
const blackTeaBags25Image = new URL('../../images/black tea bags 25.png', import.meta.url).href;
const healthTea450Image = new URL('../../images/for health 450.png', import.meta.url).href;

export const products = [
  {
    id: 1,
    name: 'Whole Leaf Black Tea – 225 g',
    price: 1500,
    category: 'Tea',
    image: wholeLeafImage,
    description: 'A premium whole leaf black tea sourced from the renowned Assam region of India. This tea delivers a rich, full-bodied taste with a smooth finish, perfect for everyday enjoyment or traditional tea rituals.',
    origin: 'Assam, India.',
    aroma: 'Warm, malty aroma with subtle earthy notes.',
    brewing: 'Steep 1 teaspoon in hot water (95–100°C) for 3–5 minutes.',
    images: [
      wholeLeafImage,
    ],
  },
  {
    id: 2,
    name: 'Medium Leaf Black Tea – 225 g',
    price: 1500,
    category: 'Tea',
    image: mediumLeafImage,
    description: 'A high-quality medium leaf black tea sourced from the renowned Assam region of India. It brews a slightly stronger and quicker cup while maintaining a rich, well-balanced flavor.',
    origin: 'Assam, India.',
    aroma: 'Rich, malty aroma with gentle earthy undertones.',
    brewing: 'Steep 1 teaspoon in hot water (95–100°C) for 3–4 minutes.',
    images: [
      mediumLeafImage,
    ],
  },
  {
    id: 3,
    name: 'Madhuban Granulated Black Tea – 500 g',
    price: 2000,
    category: 'Tea',
    image: madhubanGranulatedImage,
    description: 'A strong and flavorful granulated black tea from the Assam region of India. Its bold character and deep color make it ideal for traditional milk tea and everyday brewing.',
    origin: 'Assam, India.',
    aroma: 'Robust, malty aroma with pronounced strength.',
    brewing: 'Boil 1 teaspoon in water for 3–5 minutes; add milk if desired.',
    images: [
      madhubanGranulatedImage,
    ],
  }, 
  {
    id: 4,
    name: 'Granulated (CTC) + Leaf Black Tea – 500 g',
    price: 2000,
    category: 'Tea',
    image: ctcLeafImage,
    description: 'A balanced blend of granulated CTC tea and selected tea leaves from Assam, India. This combination offers strong flavor, rich color, and added depth from whole leaf notes.',
    origin: 'Assam, India.',
    aroma: 'Bold and malty with layered earthy tones.',
    brewing: 'Steep or boil 1 teaspoon in hot water for 3–5 minutes; suitable for black or milk tea.',
    images: [
      ctcLeafImage,
    ],
  },
  {
    id: 5,
    name: 'Champion Granulated Black Tea – 250 g',
    price: 1300,
    category: 'Tea',
    image: championGranulatedImage,
    description: 'A bold and vibrant granulated black tea sourced from the highlands of Kenya. Known for its bright liquor and strong character, this tea is ideal for quick brewing and milk tea.',
    origin: 'Kenya.',
    aroma: 'Fresh and brisk with strong malty notes.',
    brewing: 'Steep or boil 1 teaspoon in hot water for 3–4 minutes; pairs well with milk.',
    images: [
      championGranulatedImage,
    ],
  },
  {
    id: 6,
    name: 'Indian Granulated Black Tea – 250 g',
    price: 1300,
    category: 'Tea',
    image: indianGranulatedImage,
    description: 'A strong and aromatic granulated black tea sourced from India. It brews quickly into a rich, full-bodied cup, making it perfect for everyday tea and traditional milk tea.',
    origin: 'India.',
    aroma: 'Bold and malty with warm earthy notes.',
    brewing: 'Steep or boil 1 teaspoon in hot water for 3–4 minutes; suitable for black or milk tea.',
    images: [
      indianGranulatedImage,
    ],
  },
  {
    id: 7,
    name: 'Masala Tea – 200 g',
    price: 1800,
    category: 'Tea',
    image: masalaTeaImage,
    description: 'A traditional Indian masala tea made with strong black tea and a warming blend of cardamom, ginger, cinnamon, cloves, and black pepper. Rich and full-bodied, it is known for supporting digestion, boosting immunity, and providing a natural energy lift.',
    origin: 'India.',
    aroma: 'Warm, spicy, and aromatic with sweet and peppery notes.',
    brewing: 'Boil 1 teaspoon in water for 2–3 minutes, add milk and sugar, simmer 5 minutes, strain and serve.',
    images: [
      masalaTeaImage,
    ],
  },
  {
    id: 8,
    name: 'Indian CTC Black Tea – 250 g',
    price: 1500,
    category: 'Tea',
    image: indianCtcImage,
    description: 'A strong and full-bodied Indian CTC black tea sourced from Assam, made using the Crush-Tear-Curl method for a rich, brisk cup. Composed of finely granulated black tea leaves, it brews quickly and pairs perfectly with milk. Naturally rich in antioxidants and caffeine, it helps support energy levels, digestion, and daily vitality.',
    origin: 'Assam, India.',
    aroma: 'Bold, malty aroma with deep earthy notes.',
    brewing: 'Steep 1 teaspoon in hot water (95–100°C) for 3–4 minutes; add milk if desired.',
    images: [
      indianCtcImage,
    ],
  },
  {
    id: 9,
    name: 'Health Tea – 250 g',
    price: 1500,
    category: 'Tea',
    image: healthTeaImage,
    description: 'A blend of premium black tea and a proprietary blend of herbs and spices, designed to support overall health and well-being. This tea is known for its rich flavor, smooth texture, and natural health benefits.',
    origin: 'Assam, India.',
    aroma: 'Rich, malty aroma with subtle earthy notes.',
    brewing: 'Steep 1 teaspoon in hot water (95–100°C) for 3–4 minutes.',
    images: [
      healthTeaImage,
    ],
  },
  {
    id: 10,
    name: 'Green Tea Leaf – 225 g',
    price: 1600,
    category: 'Tea',
    image: greenTeaLeafImage,
    description: 'A premium whole leaf green tea made from carefully selected young tea leaves, gently processed to preserve their natural freshness. Composed of pure green tea leaves, it offers a light, smooth taste and is rich in antioxidants that support metabolism, detoxification, and overall wellness.',
    origin: 'India.',
    aroma: 'Fresh, grassy aroma with soft vegetal notes.',
    brewing: 'Steep 1 teaspoon in hot water (75–80°C) for 2–3 minutes.',
    images: [
      greenTeaLeafImage,
    ],
  },
  {
    id: 11,
    name: 'Green Tea with Jasmine – 225 g',
    price: 1700,
    category: 'Tea',
    image: jasmineGreenTeaImage,
    description: 'A delicate blend of premium green tea leaves naturally scented with jasmine flowers, creating a smooth and floral cup. Made from green tea leaves and jasmine blossoms, this tea is rich in antioxidants that support heart health, aid digestion, promote relaxation, and help reduce stress.',
    origin: 'India.',
    aroma: 'Elegant floral aroma with fresh green notes.',
    brewing: 'Steep 1 teaspoon in hot water (75–80°C) for 2–3 minutes.',
    images: [
      jasmineGreenTeaImage,
    ],
  },
  {
    id: 12,
    name: 'Black Tea with Lemon – 225 g',
    price: 1600,
    category: 'Tea',
    image: blackTeaLemonImage,
    description: 'A refreshing blend of premium black tea leaves infused with natural lemon notes for a bright and balanced flavor. Made from whole black tea leaves and lemon zest, this tea is rich in antioxidants and vitamin C, supporting immunity, digestion, and overall vitality while providing a clean, energizing cup.',
    origin: 'India.',
    aroma: 'Fresh citrus aroma with deep malty tea notes.',
    brewing: 'Steep 1 teaspoon in hot water (95–100°C) for 3–4 minutes.',
    images: [
      blackTeaLemonImage,
    ],
  },
  {
    id: 13,
    name: 'Karak Tea (Black Tea with Cardamom) – 225 g',
    price: 1800,
    category: 'Tea',
    image: karakTeaImage,
    description: 'A traditional Karak-style blend made from strong black tea and aromatic green cardamom, known for its bold, warming flavor. The combination of robust tea leaves and cardamom supports digestion, boosts energy, and provides antioxidant benefits, making it ideal for rich milk tea preparations.',
    origin: 'India.',
    aroma: 'Warm, spicy aroma with sweet cardamom notes.',
    brewing: 'Boil with water and milk, add sugar to taste, and simmer for 5–7 minutes for a strong Karak-style tea.',
    images: [
      karakTeaImage,
    ],
  },
  {
    id: 14,
    name: 'Atken Tea (CTC + Medium Leaf Black Tea) – 225 g',
    price: 1600,
    category: 'Tea',
    image: atkenTeaImage,
    description: 'A strong and balanced blend of granulated CTC tea and medium leaf black tea, specially packaged to preserve aroma and freshness. This blend delivers a rich, robust flavor and pleasant aroma while supporting immunity, reducing fatigue, and providing a natural energy boost through essential vitamins and minerals.',
    origin: 'India.',
    aroma: 'Rich and robust with layered malty notes.',
    brewing: 'Steep or boil 1 teaspoon in hot water for 3–5 minutes; suitable for black or milk tea.',
    images: [
      atkenTeaImage,
    ],
  },
  {
    id: 15,
    name: 'Black Tea Bags – 100 Bags',
    price: 2200,
    category: 'Tea',
    image: blackTeaBagsImage,
    description: 'Convenient black tea bags made from quality black tea leaves for a rich and satisfying cup. Designed for quick brewing, this tea provides natural antioxidants and caffeine that help boost energy, support digestion, and refresh the body throughout the day.',
    origin: 'India.',
    aroma: 'Classic black tea aroma with smooth malty notes.',
    brewing: 'Steep 1 tea bag in hot water (95–100°C) for 2–3 minutes.',
    images: [
      blackTeaBagsImage,
    ],
  },
  {
    id: 16,
    name: 'Black Tea Bags – 25 Bags',
    price: 500,
    category: 'Tea',
    image: blackTeaBags25Image,
    description: 'Convenient black tea bags made from quality black tea leaves for a rich and satisfying cup. Designed for quick brewing, this tea provides natural antioxidants and caffeine that help boost energy, support digestion, and refresh the body throughout the day.',
    origin: 'India.',
    aroma: 'Classic black tea aroma with smooth malty notes.',
    brewing: 'Steep 1 tea bag in hot water (95–100°C) for 2–3 minutes.',
    images: [
      blackTeaBags25Image,
    ],
  },
  {
    id: 17,
    name: 'Health Tea – 450 g',
    price: 1500,
    category: 'Tea',
    image: healthTea450Image,
    description: 'A blend of premium black tea and a proprietary blend of herbs and spices, designed to support overall health and well-being. This tea is known for its rich flavor, smooth texture, and natural health benefits.',
    origin: 'Assam, India.',
    aroma: 'Rich, malty aroma with subtle earthy notes.',
    brewing: 'Steep 1 teaspoon in hot water (95–100°C) for 3–4 minutes.',
    images: [
      healthTea450Image,
    ],
  },
];

export const categories = ['All', 'Tea'];
