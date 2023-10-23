const app = Vue.createApp({

    data() {
        return {
            contacts: [
                { name: "John", family: "Doe", phone: "123-456-7890" },
                { name: "Jane", family: "Smith", phone: "987-654-3210" },
                { name: "Bob", family: "Johnson", phone: "555-123-4567" }
            ],
            contact: { name: "", family: "", phone: "" },
            search: ""

        }
    },
    methods: {
        addContact(event) {
            // event.preventDefault();//برای جلوگیری از رفرش شدن صفحه استفاده میشود

            this.contacts.push(this.contact);
            toastr.success(`مخاطب :  ${this.contact.name} - ${this.contact.family} اضافه شد.`);
            this.contact = {};

        },
        deleteItem(contact){ 
            this.contacts=  this.contacts.filter(c=>c!==contact);
        }
    },
    computed: {
        getContactByFilter() {
            // return this.contacts.filter(f=>f.name==this.search)
            if(this.search=="") return [];
                return this.contacts.filter(f => f.name.toLowerCase().trim()
                    .includes(this.search.toLowerCase().trim()));
            
        }
    }
});

app.mount("#app");