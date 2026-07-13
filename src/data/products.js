export const categories = [
  { id: 1, name: 'Одежда' },
  { id: 2, name: 'Верхняя одежда' },
  { id: 3, name: 'Спорт' },
  { id: 4, name: 'Аксессуары' },
  { id: 5, name: 'Электроника' },
  { id: 6, name: 'Дом' }
];

export const products = [
  {
    id: 1,
    name: 'Красная футболка',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1600185367437-72ed024f91b1?fit=crop&w=150&h=150',
    category_id: 1,
    description: 'Удобная красная футболка из хлопка.',
    brand: 'Nike',
    stock: 10
  },
  {
    id: 2,
    name: 'Синие джинсы',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=150&h=150',
    category_id: 1,
    description: 'Классические синие джинсы для повседневной носки.'
  },
  {
    id: 3,
    name: 'Черная куртка',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1602810318604-2d4d06edcd37?fit=crop&w=150&h=150',
    category_id: 2,
    description: 'Теплая куртка для холодной погоды.'
  },
  {
    id: 4,
    name: 'Белая рубашка',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1523381214210-868f43d8c85d?fit=crop&w=150&h=150',
    category_id: 2,
    description: 'Элегантная белая рубашка для офиса.'
  },
  {
    id: 5,
    name: 'Спортивные кроссовки',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1600180758897-c5c0091d5dc5?fit=crop&w=150&h=150',
    category_id: 3,
    description: 'Легкие и удобные кроссовки для спорта.'
  },
  {
    id: 6,
    name: 'Сумка через плечо',
    price: 2700,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?fit=crop&w=150&h=150',
    category_id: 4,
    description: 'Практичная сумка для ежедневного использования.'
  },
  {
    id: 7,
    name: 'Черные очки',
    price: 900,
    image: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?fit=crop&w=150&h=150',
    category_id: 4,
    description: 'Стильные солнцезащитные очки.'
  },
  {
    id: 8,
    name: 'Шерстяной свитер',
    price: 3000,
    image: 'https://images.unsplash.com/photo-1600185367354-4201e6c99f8f?fit=crop&w=150&h=150',
    category_id: 2,
    description: 'Теплый свитер из натуральной шерсти.'
  },
  {
    id: 9,
    name: 'Летние шорты',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1602810321005-0faed0a8c2f4?fit=crop&w=150&h=150',
    category_id: 1,
    description: 'Комфортные шорты для лета.'
  },
  {
    id: 10,
    name: 'Кожаный ремень',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1618354694486-6b9a4f1b0126?fit=crop&w=150&h=150',
    category_id: 4,
    description: 'Классический ремень из натуральной кожи.'
  },
  {
    id: 11,
    name: 'Спортивная кепка',
    price: 700,
    image: 'https://images.unsplash.com/photo-1618354546513-fb50ee34e5d0?fit=crop&w=150&h=150',
    category_id: 3,
    description: 'Кепка для активного отдыха.'
  },
  {
    id: 12,
    name: 'Элегантное платье',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1618354694480-0c0f0e6d6a34?fit=crop&w=150&h=150',
    category_id: 2,
    description: 'Платье для торжественных мероприятий.'
  },
  {
    id: 13,
    name: 'Рюкзак для ноутбука',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1526170375885-5b2c0fa3efb3?fit=crop&w=150&h=150',
    category_id: 4,
    description: 'Удобный рюкзак с отделением для ноутбука.'
  },
  {
    id: 14,
    name: 'Зимние ботинки',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1600185367352-6d2d6c9e73f7?fit=crop&w=150&h=150',
    category_id: 2,
    description: 'Теплые и водонепроницаемые ботинки.'
  },
  {
    id: 15,
    name: 'Светофильтры для фото',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1600185367435-872d1c5f8c45?fit=crop&w=150&h=150',
    category_id: 5,
    description: 'Комплект фильтров для креативной съемки.'
  },
  {
    id: 16,
    name: 'Bluetooth-наушники',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1600185367342-7b89c2c6f7d8?fit=crop&w=150&h=150',
    category_id: 5,
    description: 'Беспроводные наушники с хорошим звучанием.'
  },
  {
    id: 17,
    name: 'Чайный набор',
    price: 1300,
    image: 'https://images.unsplash.com/photo-1600185367427-1234abcd5678?fit=crop&w=150&h=150',
    category_id: 6,
    description: 'Красивый чайный набор для дома.'
  },
  {
    id: 18,
    name: 'Кофейная кружка',
    price: 500,
    image: 'https://images.unsplash.com/photo-1600185367420-5678abcd1234?fit=crop&w=150&h=150',
    category_id: 6,
    description: 'Керамическая кружка для кофе или чая.'
  },
  {
    id: 19,
    name: 'Фитнес-резинки',
    price: 600,
    image: 'https://images.unsplash.com/photo-1600185367430-abcdef123456?fit=crop&w=150&h=150',
    category_id: 3,
    description: 'Эластичные резинки для тренировок.'
  },
  {
    id: 20,
    name: 'Настольная лампа',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1600185367440-123456abcdef?fit=crop&w=150&h=150',
    category_id: 6,
    description: 'Удобная лампа для рабочего стола.'
  }
];