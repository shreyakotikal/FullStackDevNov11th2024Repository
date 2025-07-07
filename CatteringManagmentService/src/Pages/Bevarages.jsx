import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import viewmenu from "../assets/CoverImages/Viewmenu.jpg";

import { FaShoppingCart, FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

import tea from "../assets/HotDrinksMenu/Tea.jpg";

const Beverages = () => {
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState("");
    const [cartItems, setCartItems] = useState(new Set());
    const [quantities, setQuantities] = useState({});
    const [ratings, setRatings] = useState({});
    const [errors, setErrors] = useState({});
    const [expanded, setExpanded] = useState(false);

    // Combined beverages into two categories
    const [hotDrinks] = useState([
        { name: "Tea", price: 10, image: tea },
        { name: "Coffee", price: 15, image: tea },
        { name: "Hot Chocolate", price: 18, image: tea },
        { name: "Cappuccino", price: 20, image: tea },
        { name: "Espresso", price: 22, image: tea },
        { name: "Latte", price: 25, image: tea },
        { name: "Green Tea", price: 11, image: tea },
    ]);

    const [coldDrinks] = useState([
        { name: "Lemonade", price: 12, image: tea },
        { name: "Iced Coffee", price: 17, image: tea },
        { name: "Cold Brew", price: 20, image: tea },
        { name: "Iced Tea", price: 14, image: tea },
        { name: "Milkshake", price: 30, image: tea },
        { name: "Smoothie", price: 35, image: tea },
    ]);

    const allBeverages = [...hotDrinks, ...coldDrinks];

    const handleInputChange = (event) => setSearchQuery(event.target.value);

    const toggleCartItem = (itemName) => {
        const updatedCart = new Set(cartItems);
        const updatedQuantities = { ...quantities };

        if (updatedCart.has(itemName)) {
            updatedCart.delete(itemName);
            delete updatedQuantities[itemName];
        } else {
            updatedCart.add(itemName);
            updatedQuantities[itemName] = 50;
        }

        setCartItems(updatedCart);
        setQuantities(updatedQuantities);
    };

    const handleRating = (name, value) =>
        setRatings((prev) => ({ ...prev, [name]: value }));

    const updateQuantity = (itemName, delta) => {
        setQuantities((prevQuantities) => {
            const current = prevQuantities[itemName] || 50;
            const newQuantity = current + delta;

            if (newQuantity < 50) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [itemName]: "Minimum quantity is 50",
                }));
                return prevQuantities;
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, [itemName]: "" }));
                return { ...prevQuantities, [itemName]: newQuantity };
            }
        });
    };

    const filteredBeverages = (list) =>
        list.filter((b) =>
            b.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

    const totalAmount = Array.from(cartItems).reduce((total, itemName) => {
        const beverage = allBeverages.find((b) => b.name === itemName);
        const quantity = quantities[itemName] || 0;
        return total + beverage.price * quantity;
    }, 0);

    const renderBeverageList = (title, beveragesList) => (
        <>
            <h3 style={{ fontFamily: "Delius, serif", fontWeight: "bold" }}>{title}</h3>
            <div className="row justify-content-center">
                {filteredBeverages(beveragesList).map((bev, index) => (
                    <div className="col-md-4 col-lg-3 mb-4" key={index}>
                        <div
                            className="card h-100"
                            style={{
                                border: cartItems.has(bev.name)
                                    ? "2px solid green"
                                    : "1px solid #ccc",
                            }}
                        >
                            <img
                                src={bev.image}
                                className="card-img-top"
                                alt={bev.name}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h5 className="card-title">{bev.name}</h5>
                                    <p className="card-text">Price: ₹{bev.price}</p>
                                    <div className="mb-2">
                                        {[1, 2, 3, 4, 5].map((val) => (
                                            <FaStar
                                                key={val}
                                                size={20}
                                                color={ratings[bev.name] >= val ? "#ffc107" : "#ccc"}
                                                style={{ cursor: "pointer", marginRight: "5px" }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleRating(bev.name, val);
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {cartItems.has(bev.name) && (
                                    <>
                                        <div className="d-flex justify-content-center align-items-center mb-2">
                                            <button
                                                className="btn btn-sm btn-secondary me-2"
                                                onClick={() => updateQuantity(bev.name, -1)}
                                            >
                                                −
                                            </button>
                                            <span>{quantities[bev.name]}</span>
                                            <button
                                                className="btn btn-sm btn-secondary ms-2"
                                                onClick={() => updateQuantity(bev.name, 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        {errors[bev.name] && (
                                            <p className="text-danger text-center" style={{ fontSize: "0.85rem" }}>
                                                {errors[bev.name]}
                                            </p>
                                        )}
                                    </>
                                )}

                                <button
                                    className={`btn ${cartItems.has(bev.name)
                                        ? "btn-danger"
                                        : "btn-primary"
                                        } mt-2`}
                                    onClick={() => toggleCartItem(bev.name)}
                                >
                                    {cartItems.has(bev.name) ? "Remove from Cart" : "Add to Cart"}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );

    return (
        <div style={{ position: "relative", minHeight: "100vh", overflowX: "hidden" }}>
            {/* Background Blur */}
            <div
                style={{
                    backgroundImage: `url(${viewmenu})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(8px)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                }}
            />

            {/* Foreground Content */}
            <div style={{ position: "relative", zIndex: 1 }}>
                {/* NavBar */}
                <div style={{ position: "sticky", top: 0, zIndex: 1020 }}>
                    <NavBar />
                </div>

                {/* Search */}
                <div className="bg-white py-2 px-3 shadow sticky-top" style={{ top: "64px", zIndex: 1010 }}>
                    <div className="container d-flex justify-content-between align-items-center">
                        <input
                            type="text"
                            className="form-control me-3"
                            placeholder="Search for a beverage..."
                            value={searchQuery}
                            onChange={handleInputChange}
                        />
                        <div className="cart-icon position-relative text-dark" style={{ fontSize: "1.8rem" }}>
                            <FaShoppingCart />
                            {cartItems.size > 0 && (
                                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                                    {cartItems.size}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Beverages List */}
                <div className="container mt-4 text-center text-black mb-4">
                    <h1 style={{ fontFamily: "Dancing Script, serif", fontWeight: "bold" }}>
                        Browse Our Menu Here.....
                    </h1>
                    <h2 style={{ fontFamily: "Delius, serif", fontWeight: "bold" }}>Beverages</h2>

                    {renderBeverageList("Hot Drinks:----", hotDrinks)}
                    {renderBeverageList("Cold Drinks:----", coldDrinks)}
                </div>

                {/* Footer Cart Section */}
                {cartItems.size > 0 && (
                    <div
                        className="bg-dark text-white p-3 shadow"
                        style={{
                            position: "fixed",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            zIndex: 1050,
                            maxHeight: expanded ? "80vh" : "auto",
                            overflowY: "auto",
                        }}
                    >
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <h5 className="mb-0">🛒 Your Selection</h5>
                                {Array.from(cartItems).length > 2 && (
                                    <button
                                        className="btn btn-sm btn-outline-light"
                                        onClick={() => setExpanded(!expanded)}
                                    >
                                        {expanded ? "Show Less" : "Show More"}
                                    </button>
                                )}
                            </div>

                            {(expanded
                                ? Array.from(cartItems)
                                : Array.from(cartItems).slice(0, 2)
                            ).map((item) => {
                                const beverage = allBeverages.find((b) => b.name === item);
                                const quantity = quantities[item] || 0;
                                return (
                                    <div key={item}>
                                        <strong>{item}</strong>: ₹{beverage.price} × {quantity} = ₹
                                        {beverage.price * quantity}
                                    </div>
                                );
                            })}

                            {(!expanded && cartItems.size > 2) && (
                                <p className="text-muted mt-2">...and more</p>
                            )}

                            <hr className="bg-light" />
                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                                <h6 className="mb-2 mb-md-0">Total: ₹{totalAmount}</h6>
                                <div className="d-flex gap-2">
                                    <button className="btn btn-outline-light" onClick={() => navigate(-1)}>
                                        ⬅ Back
                                    </button>
                                    <button className="btn btn-success" onClick={() => navigate("/payment")}>
                                        Proceed to Pay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Beverages;
