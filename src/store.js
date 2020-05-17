import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        productInfo: [
            {
            id: 1,
            itemPic: require('./assets/Casual-Khaki-Shoe.jpg'),
            itemName: 'Casual Khaki Shoe',
            price: 15000,
            description: 'Quality Casual Shoe'
            },
            {
            id: 2,
            itemPic: require('./assets/Dark-Leather-Pam.jpg'),
            itemName: 'Dark-Leather-Pam',
            price: 10000,
                    description: 'Quality Leather pam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex '
    
            },
            {
            id: 3,
            itemPic: require('./assets/Fancy-Pam.jpg'),
            itemName: 'Fancy Pam',
            price: 50000,
                    description: 'Quality Fancy Pam Shoe Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex '
    
            },
            {
            id: 4,
            itemPic: require('./assets/Fancy-Sneakers.jpg'),
            itemName: 'Fancy Sneakers',
            price: 30000,
                    description: 'Quality Fancy Sneakers Shoe Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex '
    
            },
            {
            id: 5,
            itemPic: require('./assets/Heavy-boot.jpg'),
            itemName: 'Heavy Boot',
            price: 20000,
            description: 'Quality Fancy Sneakers Shoe Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita'
            },
            {
            id: 6,
            itemPic: require('./assets/leather-sandals.jpg'),
            itemName: 'Leather Sandals',
            price: 30000,
            description: 'Quality Fancy Sneakers Shoe Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita'
            },
            {
            id: 7,
            itemPic: require('./assets/Mens-Simple-Pam.jpg'),
            itemName: 'Mens Simple Pam',
            price: 50000,
            description: 'Quality Fancy Sneakers Shoe Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita'
            },
            {
            id: 8,
            itemPic: require('./assets/Mens-Brogue.jpg'),
            itemName: 'Mens Brogue',
            price: 45000,
            description: 'Quality Fancy Sneakers Shoe Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita'
            },
            {
            id: 9,
            itemPic: require('./assets/Mens-Simple-Pam.jpg'),
            itemName: 'PU Leather Black Shoe',
            price: 100000,
            description: 'Quality Fancy Sneakers Shoe Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita'
            },
            {
            id: 10,
            itemPic: require('./assets/leather-sandals.jpg'),
            itemName: 'Leather Sandals',
            price: 6000,
            description: 'Quality Fancy Sneakers Shoe Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita'
            },
            {
            id: 11,
            itemPic: require('./assets/leather-sandals.jpg'),
            itemName: 'Leather Sandals',
            price: 6000,
            description: 'Quality Fancy Sneakers Shoe Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita'
            },
            {
            id: 12,
            itemPic: require('./assets/leather-sandals.jpg'),
            itemName: 'Leather Sandals',
            price: 6000,
            description: 'Quality Fancy Sneakers Shoe Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita'
            }
        ],
        carouselImages: [

        ],
        selectedProduct: null

    },
    mutations:{
        setSelectedProduct(state, proInfo) {
        state.selectedProduct = proInfo;
        }
    }
});

export default store