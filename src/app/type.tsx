interface User {

}

interface BoardGame {
    _id : string
    image : string
    title : string
    ageCut : number
    peopleCut : string
    playTime : string
    brand : string
    genre : string
    deliveryCharge : number
    point : number
    price : number
    description : string
    relatedProducts : string[]
}

interface Review {
    _id : string
    boardGameId : string
    userId : string
    content : string
    rate : number
    createAt : string
    updateAt : string | null
}

interface News {
    _id : string
    title : string
    content : string
    createAt : string
    image : string
    description : string
}
