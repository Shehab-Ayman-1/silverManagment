import { useAxios } from "@/hooks/useAxios";
import "./styles/header.scss";

export const Header = () => {
	const { data, loading } = useAxios("get", "/products/get-total-prices");

	return (
		<header className="header-section">
			<div className="">
				<h4 className="subtitle">مبيعات اليوم</h4>
				<span className="price">{!loading && (data?.salePrices?.toLocaleString() || "00,00")}</span>
			</div>
			<div className="">
				<h4 className="subtitle">اجمالي البضائع</h4>
				<span className="price">{!loading && (data?.productPrices?.toLocaleString() || "00,00")}</span>
			</div>
		</header>
	);
};
