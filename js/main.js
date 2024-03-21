const { createApp } = Vue;

createApp({
    data() {
        return {

            listaDischi:[],

           
        }
    },

    methods: {

       
    },

    mounted() {

        axios.get('./server.php').then(res => {
            console.log(res);
         this.listaDischi = res.data
            
        });

    },
}).mount('#app');