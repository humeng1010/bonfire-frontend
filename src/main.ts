import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import {Button,NavBar,Tabbar, TabbarItem,Toast} from "vant";


const app = createApp(App);

app.use(Toast)
app.use(Button)
app.use(NavBar)
app.use(Tabbar)
app.use(TabbarItem)


app.mount('#app')
