import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"Chilli Potato",
      foodDetails:"Potato | Cabbage | Onion | Capsicum  ",
      foodPrice:180,
      foodImg:"https://indianhealthyfood.com/wp-content/uploads/2021/06/imageedit_2_5630937820.webp"
    },
    {
      id:2,
      foodName:"Momoz",
      foodDetails:" Cabbage | Onion | Capsicum ",
      foodPrice:120,
      foodImg:"https://im1.dineout.co.in/images/uploads/restaurant/sharpen/7/w/g/p72036-15821820165e4e2e80acc9c.jpg?tr=tr:n-xlarge"
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetails:"panner",
      foodPrice:99,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
     
    },
    {
      id:4,
      foodName:"Chowmein",
      foodDetails:"Cabbage | Onion | Capsicum",
      foodPrice:109,
      foodImg:"https://www.jessicagavin.com/wp-content/uploads/2018/01/chow-mein-1200.jpg"
    },
    {
      id:5,
      foodName:"Chole Bhatore",
      foodDetails:"Aewsome Food",
      foodPrice:79,
      foodImg:"https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/07/12135352/chole-bhature.jpg"
    },
    {
      id:6,
      foodName:"Dosa",
      foodDetails:"Awesome Food",
      foodPrice:220,
      foodImg:"https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900"
    },
    {
      id:7,
      foodName:"Onion Pizza",
      foodDetails:"Awesome Food",
      foodPrice:320,
      foodImg:"https://img-global.cpcdn.com/recipes/cd6fec5ae0b70986/1200x630cq70/photo.jpg"
    },
    {
      id:8,
      foodName:"Paneer Pizza",
      foodDetails:"Awesome Food",
      foodPrice:380,
      foodImg:"https://static.toiimg.com/thumb/54699659.cms?width=800&height=800&imgsize=2071173"
    },
    {
      id:9,
      foodName:"idly",
      foodDetails:"Awesome Food",
      foodPrice:129,
      foodImg:"https://chakriskitchen.com/wp-content/uploads/2018/12/Idly19.jpg"
    },
    {
      id:10,
      foodName:"Samosa",
      foodDetails:"Awesome Food",
      foodPrice:39,
      foodImg:"https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800"
    },
    {
      id:11,
      foodName:"Paneer Patties",
      foodDetails:"Awesome Food",
      foodPrice:99,
      foodImg:"https://cdn3.mydukaan.io/app/image/700x700/?url=https://mydukaan-prod-new.s3.amazonaws.com/203805/5341d110-1f23-459e-b653-96ac02ebd3de.png"
    },
    {
      id:12,
      foodName:"Indian Veg Thali",
      foodDetails:"Awesome Food | Roti | Chawal | Rasgulla | Daal | Aalu | Raita | Chole | Salad" ,
      foodPrice:99,
      foodImg:"https://5.imimg.com/data5/HW/II/SH/SELLER-9770898/veg-thali-500x500.jpg"
    }
  ]




}
