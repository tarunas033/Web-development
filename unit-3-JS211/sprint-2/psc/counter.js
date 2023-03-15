let id;

class Work {

    constructor(count) {
        this.count = document.getElementById("count");
        //    console.log(this.count);
    }
    start = () => {
        //  count.innerHTML = null
        let st = document.getElementById("start");
        if (st.innerText == "Start") {
            st.innerText = "Stop"
            id = setInterval(function () {
                let ct = parseInt(this.count.innerText)
                ct++;
                this.count.innerText = ct;
            }, 1000)
        } else {
            st.innerText = "Start"
            clearInterval(id)
        }

    };

    stop = () => {
        clearInterval(id)
    }

    increment = () => {
        // console.log(this.count.innerText);
        this.stop()
        let ct = parseInt(this.count['innerText'])
        ct++;
        this.count.innerText = ct.toString();
    }
    decrement = () => {
        console.log(this.count.innerText);
        this.stop()
        let ct = parseInt(this.count['innerText'])
        ct--;
        this.count.innerText = ct.toString();
    }
}
document.getElementById("start").addEventListener("click", () => {
    let p = new Work(0)
    p.start()

})


document.getElementById("increment").addEventListener("click", () => {
    let p = new Work(0)
    p.increment()

})

document.getElementById("decrement").addEventListener("click", () => {
    let p = new Work(0)
    p.decrement()

   })

