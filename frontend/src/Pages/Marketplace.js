import React from 'react'
import style from './Marketplace.module.css';


export default function MarketPlace(){
return (
<div className={style.MarketPlace}>
    <h2>Explore MarketPlace</h2>
  <div className={style.Market}>
    <div className={style.Mark}>
      <img src="https://cdn-icons-png.flaticon.com/512/3939/3939992.png" alt=" " />
      <p>Graphics & Design</p>
    </div>
    <div className={style.Mark}>
      <img src="https://cdn-icons-png.flaticon.com/512/1968/1968641.png" alt=" "/>
      <p>Digital Marketing</p>
    </div>
    <div className={style.Mark}>
      <img src="https://cdn-icons-png.flaticon.com/512/3898/3898840.png" alt=" "/>
      <p>Writing & Translation</p>
    </div>
    <div className={style.Mark}>
      <img src="https://cdn-icons-png.flaticon.com/512/4427/4427916.png" alt=" "/>
      <p>Video & Animation</p>
    </div>
    <div className={style.Mark}>
      <img src="https://cdn-icons-png.flaticon.com/512/2882/2882867.png" alt=" " />
      <p>Music & Audio</p>
    </div>
    <div className={style.Mark}>
      <img src="https://cdn-icons-png.flaticon.com/512/1336/1336494.png" alt=" " />
      <p>Pragramming & Tech</p>
    </div>
    <div className={style.Mark}>
      <img src="https://cdn-icons-png.flaticon.com/512/493/493808.png" alt=" "/>
      <p>Business</p>
    </div>
    <div className={style.Mark}>
      <img src="https://cdn-icons-png.flaticon.com/512/2853/2853364.png" alt=" "/>
      <p>Lifestyle</p>
    </div>
    <div className={style.Mark}>
      <img src="https://cdn-icons-png.flaticon.com/512/2782/2782058.png" alt=' '/>
      <p>Data</p>
    </div>


  </div>
</div>
)
}