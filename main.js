const myData = {
	appName: "BMI Calculator",
	message: "身長と体重を入力してください",
	cm: 160,
	kg: 60,
	bmi: 0
}

const app = Vue.createApp({
    data(){
        return myData
    },

    created(){
        this.calc();
    },

    methods:{
        calc(){
            this.bmi = this.kg / ((this.cm*0.01)**2)
        }
    }
});
app.mount("#app");