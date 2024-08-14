import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
  return (
<div className="home">
<div className="home_container">
    <img 
    className="home_image"
    src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/OnePlus/Nord/NordCE4Lite/Sale/GW/SaleLive/D138805427_WLD_OnePlus_NordCE4Lite_NewLaunch_DesktopTall_Hero_1500x600._CB554566971_.jpg"
    alt=""/>


    <div className="home_row">
      <div className='shadow'>
    <Product 
    id="1"
    title="Samsung 183 L, 4 Star, Digital Inverter, Direct-Cool Single Door Refrigerator (RR20C1824CR/HL, Red, Camellia Purple, Base Stand Drawer, 2024 Model)"
    price={16390}
    image="https://m.media-amazon.com/images/I/71dwW6Z3IvL._AC_UL480_FMwebp_QL65_.jpg"
    rating={5}/>
    </div>
    <div className='shadow'>

    <Product
    id="2"
    title="Eveready 12W B22D Emergency Inverter LED Bulb| Cool Day Light (6500K) | Energy Efficient | 4 Hour Battery Backup | Li-on Battery Inside"
    price={299}
    image="https://m.media-amazon.com/images/I/61Ib-0m2nnL._AC_UL480_QL65_.jpg"
    rating={4}/>
    </div>
    </div>

    <div className="home_row">
    <div className='shadow'>
    <Product 
    id="3"
    title="SAF large photoframes present Photo Frame For Home Décor 50 x 50 cm | Use Horizontal & Vertical | Plexi Glass | Perfect For Home, Office And Shop g-Photoframe-50x50cm"
    price={999}
    image="https://m.media-amazon.com/images/I/41VyO18RPVL.AC_SX250.jpg"
    rating={3}/>
    </div>

<div className='shadow'>
    <Product 
    id="4" 
    title="P-Plus International Pepper Grinder or Salt Shaker for Professional Chef - Best Spice Mill with Brushed Stainless Steel, Special Mark, Ceramic Blades and Adjustable Coarseness (Tall Pack 1)"
    price={369}
    image="https://m.media-amazon.com/images/I/51m7mvhIwcL._AC_UL480_FMwebp_QL65_.jpg"
    rating={4}/>
    </div>

<div className='shadow'>
    <Product 
    id="5"
    title="HP v236w USB 2.0 64GB Pen Drive"
    price={359}
    image="https://m.media-amazon.com/images/I/61xNG4wjOuL._AC_SY200_.jpg"
    rating={4}/>
            </div>

    </div>
    <div className="home_row">
    <div className='shadow'>
    <Product 
    id="6"
    title="AAROORA Engineered Wood TV Entertainment Unit with Storage Shelf (Wallnut Finish), L 30 x W 90 x H 55 CM"
    price={2408}
    image="https://m.media-amazon.com/images/I/71sAn2UfxPL._AC_SY170_.jpg"
    rating={4}/>
    </div>

        
    </div>
</div>

</div>
);
}

export default Home