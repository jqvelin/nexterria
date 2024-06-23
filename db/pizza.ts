import { IProduct } from "../types"

const pizza: IProduct[] = [
    {
        id: 1,
        title: 'Сырная',
        description: 'Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо',
        size: 'medium',
        dough: 'traditional',
        price: 299,
        thumbnail: '/pizza-thumbnails/cheesy.avif'
    },
    {
        id: 2,
        title: 'Цыпленок барбекю',
        description: 'Цыпленок, бекон, соус барбекю, красный лук, моцарелла, фирменный томатный соус',
        size: 'medium',
        dough: 'traditional',
        price: 589,
        thumbnail: '/pizza-thumbnails/barbecue-chicken.avif'
    },
    {
        id: 3,
        title: 'Колбаски барбекю',
        size: 'medium',
        dough: 'traditional',
        description: 'Острые колбаски чоризо, соус барбекю, томаты, красный лук, моцарелла, фирменный томатный соус',
        price: 489,
        thumbnail: '/pizza-thumbnails/barbecue-sausages.avif'
    },
    {
        id: 4,
        title: 'Бургер-пицца',
        size: 'medium',
        dough: 'traditional',
        description: 'Ветчина, маринованные огурчики, томаты, красный лук, чеснок, соус бургер, моцарелла, фирменный томатный соус',
        price: 489,
        thumbnail: '/pizza-thumbnails/burger.avif'
    },
    {
        id: 5,
        title: 'Карбонара',
        size: 'medium',
        dough: 'traditional',
        description: 'Бекон, сыры чеддер и пармезан, моцарелла, томаты, красный лук, чеснок, фирменный соус альфредо, итальянские травы',
        price: 589,
        thumbnail: '/pizza-thumbnails/carbonara.avif'
    },
    {
        id: 6,
        title: 'Сырный цыпленок',
        size: 'medium',
        dough: 'traditional',
        description: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, фирменный соус альфредо, чеснок',
        price: 539,
        thumbnail: '/pizza-thumbnails/cheesy-chicken.avif'
    },
    {
        id: 7,
        title: 'Чоризо фреш',
        size: 'medium',
        dough: 'traditional',
        description: 'Острые колбаски чоризо, сладкий перец, моцарелла, фирменный томатный соус',
        price: 299,
        thumbnail: '/pizza-thumbnails/chorizo-fresh.avif'
    },
    {
        id: 8,
        title: 'Диабло',
        size: 'medium',
        dough: 'traditional',
        description: 'Острые колбаски чоризо, острый перец халапеньо, соус барбекю, митболы из говядины, томаты, сладкий перец, красный лук, моцарелла, фирменный томатный соус',
        price: 589,
        thumbnail: '/pizza-thumbnails/diablo.avif'
    },
    {
        id: 9,
        title: 'Двойной цыпленок',
        size: 'medium',
        dough: 'traditional',
        description: 'Цыпленок, моцарелла, фирменный соус альфредо',
        price: 409,
        thumbnail: '/pizza-thumbnails/double-chicken.avif'
    },
    {
        id: 10,
        title: 'Четыре сезона',
        size: 'medium',
        dough: 'traditional',
        description: 'Увеличенная порция моцареллы, ветчина, пикантная пепперони, кубики брынзы, томаты, шампиньоны, итальянские травы, фирменный томатный соус',
        price: 489,
        thumbnail: '/pizza-thumbnails/four-seasons.avif'
    },
    {
        id: 11,
        title: 'Ветчина и сыр',
        size: 'medium',
        dough: 'traditional',
        description: 'Ветчина, моцарелла, фирменный соус альфредо',
        price: 409,
        thumbnail: '/pizza-thumbnails/ham-and-cheese.avif'
    },
    {
        id: 12,
        title: 'Ветчина и грибы',
        size: 'medium',
        dough: 'traditional',
        description: 'Ветчина, шампиньоны, увеличенная порция моцареллы, фирменный томатный соус',
        price: 489,
        thumbnail: '/pizza-thumbnails/ham-and-mushrooms.avif'
    },
    {
        id: 13,
        title: 'Гавайская',
        size: 'medium',
        dough: 'traditional',
        description: 'Двойная порция цыпленка, ананасы, моцарелла, фирменный соус альфредо',
        price: 489,
        thumbnail: '/pizza-thumbnails/hawaii.avif'
    },
    {
        id: 14,
        title: 'Пицца Жюльен',
        size: 'medium',
        dough: 'traditional',
        description: 'Цыпленок, шампиньоны, ароматный грибной соус, лук, сухой чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо',
        price: 539,
        thumbnail: '/pizza-thumbnails/julienne.avif'
    },
    {
        id: 15,
        title: 'Маргарита',
        size: 'medium',
        dough: 'traditional',
        description: 'Увеличенная порция моцареллы, томаты, итальянские травы, фирменный томатный соус',
        price: 539,
        thumbnail: '/pizza-thumbnails/margarita.avif'
    },
    {
        id: 16,
        title: 'Мясная',
        size: 'medium',
        dough: 'traditional',
        description: 'Цыпленок, ветчина, пикантная пепперони, острые колбаски чоризо, моцарелла, фирменный томатный соус',
        price: 539,
        thumbnail: '/pizza-thumbnails/meat.avif'
    },
    {
        id: 17,
        title: 'Пепперони фреш',
        size: 'medium',
        dough: 'traditional',
        description: 'Пикантная пепперони, увеличенная порция моцареллы, томаты, фирменный томатный соус',
        price: 299,
        thumbnail: '/pizza-thumbnails/pepperoni-fresh.avif'
    },
    {
        id: 18,
        title: 'Пепперони',
        size: 'medium',
        dough: 'traditional',
        description: 'Пикантная пепперони, увеличенная порция моцареллы, фирменный томатный соус',
        price: 489,
        thumbnail: '/pizza-thumbnails/pepperoni.avif'
    },
    {
        id: 19,
        title: 'Песто',
        size: 'medium',
        dough: 'traditional',
        description: 'Цыпленок, соус песто, кубики брынзы, томаты, моцарелла, фирменный соус альфредо',
        price: 539,
        thumbnail: '/pizza-thumbnails/pesto.avif'
    },
    {
        id: 20,
        title: 'Овощи и грибы',
        size: 'medium',
        dough: 'traditional',
        description: 'Шампиньоны, томаты, сладкий перец, красный лук, кубики брынзы, моцарелла, фирменный томатный соус, итальянские травы',
        price: 539,
        thumbnail: '/pizza-thumbnails/vegetables-and-mushrooms.avif'
    },
]

export default pizza