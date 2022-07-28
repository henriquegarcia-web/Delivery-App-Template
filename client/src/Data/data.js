// --------- USERS IMPORTS
import UserImage from '../Assets/Images/UserImage.jpg'

// --------- PRODUCTS IMPORTS
import HamburguerIcon from '../Assets/FoodIcons/001-hamburguer.png'
import DrinkIcon from '../Assets/FoodIcons/005-bebida.png'
import PizzaIcon from '../Assets/FoodIcons/002-pizza.png'
import MolhoIcon from '../Assets/FoodIcons/003-molhos.png'
import FriersIcon from '../Assets/FoodIcons/010-fritas.png'

import HamburguerImage from '../Assets/Images/Hamburguer.jpg'

export const MainData = {
  accounts: {
    users: [
      {
        id: '001',
        image: UserImage,
        name: 'João Pedro',
        email: 'joaopedro@outlook.com',
        number: '(51) 9 9307 7788',
        cpf: '849.882.580-68',
        address: {
          cep: '92425-563',
          street: 'R. Hélio Fraga de Moraes Sarmento',
          number: '16',
          city: 'Canoas'
        },
      },
    ],
    admins: [
      {
        id: '1',
        image: UserImage,
        name: 'Henrique Garcia',
        email: 'https.henrique@outlook.com',
        number: '(51) 9 9307 7788',
        cpf: '849.882.580-68',
        address: {
          cep: '92425-563',
          street: 'R. Hélio Fraga de Moraes Sarmento',
          number: '16',
          city: 'Canoas'
        },
      },
    ]
  },

  products: {
    categories: [
      {
        id: 'c-001',
        title: 'Hambúrgueres',
        icon: HamburguerIcon,
        link: '',
        products: [
          {
            id: 'pc-001',
            title: 'Hambúrguer Delícia',
            legend: 'Um hambúrguer super delicioso feito com amor',
            price: 29.90,
            image: HamburguerImage
          },
        ]
      },
      {
        id: 'c-002',
        title: 'Bebidas',
        icon: DrinkIcon,
        link: '',
        products: [
          {
            id: 'pc-002',
            title: 'Coca Coca',
            legend: 'Uma Coca bem gelada de dar água na boca',
            price: 9.90,
            image: HamburguerImage
          },
        ]
      },
      {
        id: 'c-003',
        title: 'Pizzas',
        icon: PizzaIcon,
        link: '',
        products: [
          {
            id: 'pc-003',
            title: 'Pizza',
            legend: 'Pizza redonda cortada em fatias triangulares',
            price: 99.90,
            image: HamburguerImage
          },
        ]
      },
      {
        id: 'c-004',
        title: 'Hambúrgueres',
        icon: HamburguerIcon,
        link: '',
        products: [
          {
            id: 'pc-001',
            title: 'Hambúrguer Delícia',
            legend: 'Um hambúrguer super delicioso feito com amor',
            price: 29.90,
            image: HamburguerImage
          },
        ]
      },
      {
        id: 'c-005',
        title: 'Bebidas',
        icon: DrinkIcon,
        link: '',
        products: [
          {
            id: 'pc-002',
            title: 'Coca Coca',
            legend: 'Uma Coca bem gelada de dar água na boca',
            price: 9.90,
            image: HamburguerImage
          },
        ]
      },
      {
        id: 'c-006',
        title: 'Pizzas',
        icon: PizzaIcon,
        link: '',
        products: [
          {
            id: 'pc-003',
            title: 'Pizza',
            legend: 'Pizza redonda cortada em fatias triangulares',
            price: 99.90,
            image: HamburguerImage
          },
        ]
      },
    ],
    products: [
      {
        id: 'p-001',
        title: 'Hambúrguer Delícia',
        legend: 'Um hambúrguer super delicioso feito com amor',
        price: 29.90,
        image: HamburguerImage,
        ingredients: [
          {
            id: 'ing-01',
            img: MolhoIcon,
            name: 'Ketchup'
          },
          {
            id: 'ing-02',
            img: MolhoIcon,
            name: 'Mostarda'
          },
          {
            id: 'ing-03',
            img: FriersIcon,
            name: 'Batatas'
          },
        ],
        mandatoryItems: [
          {
            id: 'man-01',
            name: 'Ketchup',
            price: 10.00
          },
          {
            id: 'man-02',
            name: 'Mostarda',
            price: 5.00
          },
          {
            id: 'man-03',
            name: 'Batatas',
            price: 15.00
          },
        ],
        additionalItems: [
          {
            id: 'add-01',
            name: 'Ketchup',
            price: 14.00
          },
          {
            id: 'add-02',
            name: 'Mostarda',
            price: 8.00
          },
          {
            id: 'add-03',
            name: 'Batatas',
            price: 4.00
          },
        ]
      },
      {
        id: 'pc-002',
        title: 'Coca Coca',
        legend: 'Uma Coca bem gelada',
        price: 9.90,
        image: HamburguerImage
      },
      {
        id: 'pc-003',
        title: 'Pizza',
        legend: 'Pizza redonda cortada em fatias triangulares',
        price: 99.90,
        image: HamburguerImage
      },
      {
        id: 'pc-004',
        title: 'Pizza',
        legend: 'Pizza redonda cortada em fatias triangulares',
        price: 99.90,
        image: HamburguerImage
      },
    ]
  },

  orders: [
    {
      id: 'order-list-001',
      start: '08:00',
      end: '20:00',
      orders: [
        {
          id: 'o-001',
          clientInfo: {
            name: 'Luana',
            number: '55 8465 2154',
            address: 'Rivaldo de Azevedo, n 15',
          },
          orderInfo: {
            items: [
              {
                id: 'p-001',
                title: 'Hambúrguer Delícia',
                legend: 'Um hambúrguer super delicioso feito com amor',
                price: 29.90,
              },
            ],
            total: 199.90            
          }
        },
      ]
    },
  ]
}