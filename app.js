const app = Vue.createApp({

    data() {
        return {
            name: "ali",
            family: "Parsa",
            isShow: false,
            users: ["ali", "naghi", "gholi", "sall", "joe"],
            contacts: [
                { name: "Mohsen", family: "Parsa" },
                { name: "ali", family: "alavi" },
                { name: "naghi", family: "naghavi" },
                { name: "hasan", family: "hasani" },
                { name: "sara", family: "boor" },
                { name: "joe", family: "bing" },

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
