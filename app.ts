const app = Vue.createApp({
	data(){
		return {
			fname : "Abdelilah",
			lname : "Ommane",
			email : "abdelilahoman@hotmail.com",
			picture : ""
		}
	},
	methods:
	{
		async getUser(){
			const res = await fetch("https://randomuser.me/api");
			const { results } = await res.json();
			console.log(results);
			
			this.fname = results[0].name.first;
			this.lname = results[0].name.last;
			this.email = results[0].email;
			this.picture = results[0].picture.large;
		}
	}
});

app.mount('#app');
