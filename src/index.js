console.log(52222555)

import route from './js/initRoute.js'

console.dir(route)

document.getElementsByClassName('goback')[0].addEventListener('click', goBack)

function goBack() {
    route.go(-1)
}