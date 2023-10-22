const app = Vue.createApp({
 
    data() {
        return {
            name:"ali",
            family :"Parsa",
            isShow: false
        }
    },
    methods: {
        toggleStatus(){
            this.isShow=!this.isShow;
        }

    },
});
app.mount("#app");
