const app = Vue.createApp({

    data() {
        return {
            name1: "ali",
            family1: "Parsa",
            isShow: false, 
            contacts: [
                { name: "Mohsen", family: "Parsa" ,html:"<h1> name1 family1</h1>" },
                { name: "ali", family: "alavi" ,html:"<h1> {{name}}  {{family}}</h1>" },
                { name: "naghi", family: "naghavi" ,html:"<h1> {{name}}  {{family}}</h1>" },
                { name: "hasan", family: "hasani" ,html:"<h1> {{name}}  {{family}}</h1>" },
                { name: "sara", family: "boor" ,html:"<h1> {{name}}  {{family}}</h1>" },
                { name: "joe", family: "bing" ,html:"<h1> {{name}}  {{family}}</h1>" },

            ]
        }
    },
    methods: {
        toggleStatus() {
            this.isShow = !this.isShow;
        }

    },
});
app.mount("#app");
