import React from 'react';
import style from './NavigationItems.module.css';
import {Link} from 'react-router-dom';
const navigationitems = () => (


<div >

<ul className ={style.NavigationItems} >
<li className={style.NavigationItem} ><a href = '/' >Burger Builder</a></li>
<li className={style.NavigationItem}><Link to = '/orders'>ALL Ordres</Link></li>
</ul>

</div>

);


export default navigationitems;