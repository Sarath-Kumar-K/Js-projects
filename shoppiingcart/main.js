let shop = document.getElementById("shop");

let basket = [];

let shopitemsdata = [
    {
        id:"item1",
        name:"sleeve",
        price:45,
        desc:"Lorem ipsum dolor sit amet consector adipiscing.",
        img:"img/1.jpg"
    },{
        id:"item2",
        name:"Office shirt",
        price:50,
        desc:"Lorem ipsum dolor sit amet consector adipiscing.",
        img:"img/2.jpg"
    },{
        id:"item3",
        name:"pant",
        price:55,
        desc:"Lorem ipsum dolor sit amet consector adipiscing.",
        img:"img/3.jpg"
    },{
        id:"item4",
        name:"Lygra Shirts",
        price:60,
        desc:"Lorem ipsum dolor sit amet consector adipiscing.",
        img:"img/4.jpg"
    }
]

let generateshop = () => {
    return (shop.innerHTML = shopitemsdata.map((x)=>{
        return `
    <div class="col-lg-3 col-md-6" id="${x.id}">
        <div class="card">
            <img src="${x.img}" alt="" class="card-img-top img-fluid">
            <div class="card-body">
                <h5 class="card-title">${x.name}</h5>
                <p>${x.desc}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="fw-semibold fs-4 text-dark">$ ${x.price}</p>
                    <div class="buttons d-flex justify-content-between pb-2">
                        <i onclick="decrement(${x.id})" class="bi bi-dash-lg mx-1 text-danger"></i>
                        <div class="quantity mx-1">0</div> 
                        <i onclick="increment(${x.id})" class="bi bi-plus-lg mx-1 text-success"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }).join(""));
};

generateshop();

let  increment = (id) => {
    let selecteditem = id;
    let search = basket.find(x => x.id === selecteditem.id);
    if(search===undefined){
        basket.push({
            id:selecteditem.id,
            item:1,
        })
    }else{
        search.item+=1;
    }
    console.log(basket);
};
let decrement = (id) => {
    let selecteditem = id;
    let search = basket.find(x => x.id === selecteditem.id);
    if(search===0){
        basket.push({
            id:selecteditem.id,
            item:1,
        })
    }else{
        search.item-=1;
    }
    console.log(basket);
};
let update = () => {
    
};
