import { model, Schema } from "mongoose";

const schema = new Schema({
	date: { type: Date, default: new Date().toLocaleDateString() },
	orders: [
		{
			name: { type: String, trim: true },
			count: { buy: Number, sales: Number },
			weight: String,
			catagory: String,
			gem: String,
			silverType: String,
			price: String,
			customePrice: { silverType: String, price: String },
		},
	],
});

export const Sales = model("sales", schema);
