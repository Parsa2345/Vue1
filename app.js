const app = Vue.createApp({
    // template:"<h1>  {{name}} {{family}}</h1>",
    data() {
        return {
            name:"Mohsen",
            family :"Parsa",
            counter: 0
        }
    },
    methods: {
        Increase()
        {
            this.counter++;
        },

        Decrease(counter){
            if(counter>0)
            {this.counter--;}

        },
        GetPos(event){
            console.log(`x is ${event.x} and y is ${event.y}`);
        }

    },
});
app.mount("#app");
