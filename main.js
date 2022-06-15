const myData = {
    appName: "ニックネームメーカー",
    nickname: "ニックネーム",
    names: [
        "スライム",
		"スライムベス",
		"メタルスライム",
		"はぐれメタル",
		"メタルキング"
    ]
}

const app = Vue.createApp({
    data(){
        return myData
    },
    created(){
        console.log("created!")
        this.roulette()
    },
    methods:{
        roulette(){
			let index = Math.floor(Math.random() * this.names.length)
            console.log(index)
            this.nickname = this.names[index]
        }
    }
})
app.mount("#app")