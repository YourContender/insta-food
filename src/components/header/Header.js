import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalMenu from "../modal/ModalMenu";
import logo from "../../img/header/logo.png";
import {
	faMagnifyingGlass,
	faUser,
	faSquarePhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

const Header = ({ display }) => {
	const [modalMenu, setModalMenu] = useState(false);
	const phoneNumbers = ["097", "099", "095"];
	const phoneOperators = ["Kyivstar", "Vodafone", "Lifecell"];
	const phoneColors = ["blue", "red", "yellow"];
	const [currentPhoneNumberIndex, setCurrentPhoneNumberIndex] = useState(0);
	const [currentPhoneNumber, setCurrentPhoneNumber] = useState(phoneNumbers[0]);
	const [currentOperator, setCurrentOperator] = useState(phoneOperators[0]);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentPhoneNumberIndex((prevIndex) => {
				return (prevIndex + 1) % phoneNumbers.length;
			});
		}, 3000);

		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		setCurrentPhoneNumber(phoneNumbers[currentPhoneNumberIndex]);
		setCurrentOperator(phoneOperators[currentPhoneNumberIndex]);
	}, [currentPhoneNumberIndex]);

	return (
		<>
			{modalMenu ? (
				<ModalMenu setModalMenu={setModalMenu} />
			) : (
				<div className="header" style={{ position: display }}>
					<Link to="/">
						<div className="header_logo">
							<img src={logo} alt="logo" />

							<div className="header_title">
								<h4>InstaFood</h4>
								<span>м.Київ</span>
								<p>З 10:00 до 21:00</p>
							</div>
						</div>
					</Link>

					<div className="header_text">
						<div className="header_text-top">
							<span>Доставка та оплата</span>
							<span>Про нас</span>
							<span>Блог</span>
							<span>Купон</span>
							<span>Акції</span>
							<span>Відгуки</span>
							<span>Навчання</span>
						</div>

						<div className="header_text-down">
							<input placeholder="Шукати за назвою" />
							<div className="header_text-down-tel">
								<div>
									<span>+38</span>
								</div>

								<div
									className={`header_text-down-tel-${phoneColors[currentPhoneNumberIndex]}`}
								>
									<span>{currentPhoneNumber}</span>
									<p>{currentOperator}</p>
								</div>

								<div>
									<span>9450166</span>
								</div>
							</div>
							<span className="header_text-down-search">
								<FontAwesomeIcon icon={faMagnifyingGlass} />
							</span>
							<span className="header_text-down-user">
								<FontAwesomeIcon icon={faUser} />
							</span>

							<Link to={"/basket"}>button add</Link>
						</div>
					</div>

					<div className="header_mobile">
						<div
							className="header_mobile-burger"
							onClick={() => setModalMenu(true)}
						>
							<span></span>
							<span></span>
							<span></span>
						</div>

						<span className="header_mobile-phone">
							<FontAwesomeIcon icon={faSquarePhoneFlip} />
						</span>
					</div>
				</div>
			)}
		</>
	);
};

export default Header;
