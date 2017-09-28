export interface IUsers {
	id:number,
	name:string,
	email:string,
	address?:{
		street:string,
		suite:string,
		city:string,
		zipcode:string,
		geo?:{
			lat:string,
			lng:string
		}
	},
	phone:string,
	website:string,
	company?:{
		name:string,
		catchPhrase:string,
		bs:string
	}
};

export interface IUser {
	userId:number,
	id:number,
	title:string,
	completed:false
};
