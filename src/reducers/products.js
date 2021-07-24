var initalSate=[
    {
        id:1,
        name:'Iphone 7 Plus',
        image:'https://hoanghamobile.com/i/preview/Uploads/2020/11/06/iphone-12-pro-max.png',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 15,
        rating:5
    },
    {
        id:2,
        name:'Iphone 8 Plus',
        image:'https://hoanghamobile.com/i/preview/Uploads/2020/11/06/iphone-12-pro-max.png',
        description: 'Sản phẩm do Apple sản xuất',
        price: 560,
        inventory: 15,
        rating:4
    },
    {
        id:3,
        name:'Iphone 9 Plus',
        image:'https://hoanghamobile.com/i/preview/Uploads/2020/11/06/iphone-12-pro-max.png',
        description: 'Sản phẩm do Apple sản xuất',
        price: 590,
        inventory: 15,
        rating:3
    }
]

const products = (state = initalSate,action)=>{
    switch(action.type){

        default : return [...state];

    }

}


export default products;