
export default class Route {

    constructor(parm) {
        console.dir(parm)
        this.routes = {}
        parm.routeList.forEach(element => {
           this.routes[element.path] = element.callback
        })
    
        this.routeHistory = []
        this.current_index = this.routeHistory.length - 1
        this.isBack = 0
        let translationTo = this.translationTo.bind(this)
        window.addEventListener('hashchange', translationTo)
        // 
        translationTo()
    }

    addRoute(path, callback) {
        this.routes[path] = callback
    }

    translationTo() {
        let hash = location.hash.slice(1)
        this.routes[hash] && this.routes[hash]()
        if (!this.isBack) {
            this.routeHistory.push(hash)
            this.current_index = this.routeHistory.length - 1
        }
        this.isBack = 0
        appendRoute.call(this)
    }

    go(i) {
        this.isBack = 1
        this.current_index += i
        location.hash = '#' + this.routeHistory[this.current_index]
    }
}


function appendRoute() {
    let div = document.createElement('div')
    div.innerHTML = this.routeHistory
    document.body.appendChild(div)
}
