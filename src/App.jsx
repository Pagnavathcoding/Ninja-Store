import React, { useState, createContext, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import product from './data';
// Icons
import dark from './Icons/dark.svg';
import light from './Icons/light.svg';
import cart from './Icons/cart.svg';
import close from './Icons/close.svg';
import dolar from './Icons/dolar.svg';
import minus from './Icons/minus.svg';
import plus from './Icons/plus.svg';
import transport from './Icons/transport.svg';
// informations
const Context = createContext();
const darkTheme = "#282c34";
const lightTheme = "#fff";
function Home() {
    const { toggle, setToggle } = useContext(Context);
    return (
        <main>
            <section className="container">
                <h1>Welcome to NinjaStore!</h1>
                <p>Best selling platform for Products ...</p>
                <button onClick={() => setToggle(!toggle)}>Open Menu</button>
            </section>
            <div className="services">
                <div className="services-title">
                    <h1>Our Services</h1>
                </div>
                <div className="services-content">
                    <div className="service">
                        <div className="service-image">
                            <img src={transport} alt="transport" />
                        </div>
                        <div className="service-content">
                            <h1>Delivery</h1>
                            <p>Fast delivery, product cares...</p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-image">
                            <img src={dolar} alt="dolar" />
                        </div>
                        <div className="service-content">
                            <h1>Price</h1>
                            <p>5% off every time your cart is $999.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
function local() {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
        return localTheme;
    }
    else {
        return "#fff";
    }
}
function dataInfos() {
    const data = localStorage.getItem("infos");
    if (data) {
        return JSON.parse(data)
    }
    else {
        return []
    }
}
function Laptop() {
    const { data } = useContext(Context);
    const { infos, setInfos } = useContext(Context);
    const { theme } = useContext(Context);
    const filtered = data.filter((data) => {
        return data.type === "laptop"
    })
    function addInfos(id) {
        for (let index = 0; index < infos.length; index++) {
            if (infos[index].id === id) return;
        }
        const add = data.filter((data) => {
            return data.id === id;
        })
        setInfos(infos.concat(add));
    }
    function finding(id) {
        let arr = []
        for (let index = 0; index < infos.length; index++) {
            if (infos[index].id === id) {
                arr.push(["Added"])
            }
        }
        if (arr.length === 0) {
            return "Add to Cart"
        }
        else {
            return arr[0];
        }
    }
    return (
        <section className="laptop">
            <h3>NinjaStore &gt; Laptop</h3>
            <div className="laptop-products">
                {
                    filtered.map((data) => {
                        return (
                            <div className="item" key={data.id} style={{ boxShadow: theme === lightTheme ? "0 2px 4px #c8c8c8" : "", border: theme === lightTheme ? "none" : "0.1em solid #4b6587" }}>
                                <img src={data.image} alt={data.title} />
                                <div className="content">
                                    <h1>{data.title}</h1>
                                    <p>Price: ${data.price}</p>
                                    <button title="Add to Cart" onClick={() => addInfos(data.id)}>{finding(data.id)}</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
function Phone() {
    const { data } = useContext(Context);
    const { infos, setInfos } = useContext(Context);
    const { theme } = useContext(Context);
    const filtered = data.filter((data) => {
        return data.type === "phone"
    })
    function addInfos(id) {
        for (let index = 0; index < infos.length; index++) {
            if (infos[index].id === id) return;
        }
        const add = data.filter((data) => {
            return data.id === id;
        })
        setInfos(infos.concat(add));
    }
    function finding(id) {
        let arr = []
        for (let index = 0; index < infos.length; index++) {
            if (infos[index].id === id) {
                arr.push(["Added"])
            }
        }
        if (arr.length === 0) {
            return "Add to Cart"
        }
        else {
            return arr[0];
        }
    }
    return (
        <section className="phone">
            <h3>NinjaStore &gt; Phone</h3>
            <div className="phone-products">
                {
                    filtered.map((data) => {
                        return (
                            <div className="item" key={data.id} style={{ boxShadow: theme === lightTheme ? "0 2px 4px #c8c8c8" : "", border: theme === lightTheme ? "none" : "0.1em solid #4b6587" }}>
                                <img src={data.image} alt={data.title} />
                                <div className="content">
                                    <h1>{data.title}</h1>
                                    <p>Price: ${data.price}</p>
                                    <button title="Add to Cart" onClick={() => addInfos(data.id)}>{finding(data.id)}</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
function Keyboard() {
    const { data } = useContext(Context);
    const { infos, setInfos } = useContext(Context);
    const { theme } = useContext(Context);
    const filtered = data.filter((data) => {
        return data.type === "keyboard"
    })
    function addInfos(id) {
        for (let index = 0; index < infos.length; index++) {
            if (infos[index].id === id) return;
        }
        const add = data.filter((data) => {
            return data.id === id;
        })
        setInfos(infos.concat(add));
    }
    function finding(id) {
        let arr = []
        for (let index = 0; index < infos.length; index++) {
            if (infos[index].id === id) {
                arr.push(["Added"])
            }
        }
        if (arr.length === 0) {
            return "Add to Cart"
        }
        else {
            return arr[0];
        }
    }
    return (
        <section className="keyboard">
            <h3>NinjaStore &gt; Phone</h3>
            <div className="keyboard-products">
                {
                    filtered.map((data) => {
                        return (
                            <div className="item" key={data.id} style={{ boxShadow: theme === lightTheme ? "0 2px 4px #c8c8c8" : "", border: theme === lightTheme ? "none" : "0.1em solid #4b6587" }}>
                                <img src={data.image} alt={data.title} />
                                <div className="content">
                                    <h1>{data.title}</h1>
                                    <p>Price: ${data.price}</p>
                                    <button title="Add to Cart" onClick={() => addInfos(data.id)}>{finding(data.id)}</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
function Cart() {
    const { infos, setInfos } = useContext(Context);
    const { theme } = useContext(Context);
    function removeInfos(id) {
        const another = infos.filter((data) => {
            return data.id !== id;
        })
        setInfos(another);
    }
    function increaseCounter(id) {
        const counterInfos = infos.map((data) => {
            return data.id === id ? { ...data, count: data.count + 1 } : data;
        })
        setInfos(counterInfos);
    }
    function decreaseCounter(id) {
        const counterInfos = infos.map((data) => {
            const sub = data.count - 1;
            return data.id === id ? { ...data, count: sub < 1 ? sub + 1 : sub } : data;
        })
        setInfos(counterInfos);
    }
    let arr = []
    for (let index = 0; index < infos.length; index++) {
        arr.push(infos[index].count)
    }
    let calc = arr.length > 0 && arr.reduce((data, index) => {
        return data + index;
    })
    let total = []
    for (let index = 0; index < infos.length; index++) {
        total.push(infos[index].price * infos[index].count)
    }
    const totalInfos = total.length > 0 && total.reduce((data, index) => {
        return data + index;
    }) || 0;
    const discounted_price = Math.floor(totalInfos - (totalInfos * 5 / 100))
    return (
        <section className="cartInfos">
            <div className="discount" style={{ display: totalInfos >= 999 ? "flex" : "none" }}>
                <p>Discount 5%.</p>
            </div>
            <div className="cart-header">
                <h1>Cart: {infos.length > 0 ? calc < 10 ? "0" + calc : calc : "Empty!"}</h1>
                <h1 style={{ display: infos.length === 0 ? "none" : "block" }}>Total: ${totalInfos >= 999 ? discounted_price : totalInfos}</h1>
            </div>
            <div className="cart-data">
                {
                    infos.map((data) => {
                        return (
                            <div key={data.id} className="carts" style={{ boxShadow: theme === lightTheme ? "0 2px 4px #c8c8c8" : "", border: theme === lightTheme ? "none" : "0.1em solid #4b6587" }}>
                                <div>
                                    <img src={data.image} alt={data.title} height="120px" style={{ borderRadius: "5px" }} />
                                </div>
                                <div className="c">
                                    <h3>Product:</h3>
                                    <p>{data.title}</p>
                                </div>
                                <div className="c">
                                    <h3>Price:</h3>
                                    <p>${data.price * data.count}</p>
                                </div>
                                <div className="countInfos">
                                    <h3>Quantity</h3>
                                    <div className="counter">
                                        <button onClick={() => decreaseCounter(data.id)}><img src={minus} /></button>
                                        <p>{data.count < 10 ? "0" + data.count : data.count}</p>
                                        <button onClick={() => increaseCounter(data.id)}><img src={plus} /></button>
                                    </div>
                                </div>
                                <div className="btn-remove">
                                    <button onClick={() => removeInfos(data.id)}>Remove</button>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="remove-all" style={{ display: infos.length > 0 ? "block" : "none" }}>
                    <button onClick={() => setInfos([])}>Remove All</button>
                </div>
            </div>
        </section>
    )
}
function App() {
    const [data] = useState(product);
    const [theme, setTheme] = useState(local());
    const [toggle, setToggle] = useState(false);
    const [infos, setInfos] = useState(dataInfos());
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);
    useEffect(() => {
        localStorage.setItem("infos", JSON.stringify(infos));
    }, [infos])
    const style = {
        dark: {
            display: theme === "#282c34" ? "none" : "flex"
        },
        light: {
            display: theme === "#fff" ? "none" : "flex"
        },
        link: {
            color: theme === lightTheme ? "#222" : "#fff",
        }
    }
    let arr = []
    for (let index = 0; index < infos.length; index++) {
        arr.push(infos[index].count);
    }
    return (
        <Router>
            <Context.Provider value={{ theme, toggle, setToggle, data, infos, setInfos }}>
                <main style={{ background: theme, color: theme === lightTheme ? "#222" : "#fff" }}>
                    <header>
                        <div className="menu-logo">
                            <div className="menu" onClick={() => setToggle(!toggle)}>
                                <div className="lines">
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </div>
                                <p>Menu</p>
                            </div>
                            <div className="logo">
                                <h1><NavLink to="/" id="logo">NinjaStore</NavLink></h1>
                                <div className="dark-light">
                                    <div className="dark" onClick={() => setTheme("#282c34")} style={style.dark}>
                                        <img src={dark} alt="dark" />
                                    </div>
                                    <div className="light" onClick={() => setTheme("#fff")} style={style.light}>
                                        <img src={light} alt="light" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={toggle ? "open-menu show" : "open-menu"} style={{ background: theme, color: theme === lightTheme ? "#222" : "#fff", borderRight: theme === lightTheme ? "0.1em solid #555" : "0.1em solid #4B6587", zIndex: "20" }}>
                            <div className="close" onClick={() => setToggle(!toggle)}>
                                <img src={close} alt="close" />
                            </div>
                            <div className="menu-title">
                                <h1>Menu</h1>
                                <NavLink to="/" exact style={style.link} className="home" onClick={() => setToggle(!toggle)} activeClassName="link-active">Home</NavLink>
                                <NavLink to="/cart" exact style={style.link} className="home" id="cartInformation" onClick={() => setToggle(!toggle)} activeClassName="link-active">Cart</NavLink>
                            </div>
                            <div className="products">
                                <h1>Products</h1>
                                <div className="product">
                                    <NavLink to="/laptop" style={style.link} exact className="link" activeClassName="link-active" onClick={() => setToggle(!toggle)}>Laptop</NavLink>
                                    <NavLink to="/phone" style={style.link} exact className="link" activeClassName="link-active" onClick={() => setToggle(!toggle)}>Phone</NavLink>
                                    <NavLink to="/keyboard" style={style.link} exact className="link" activeClassName="link-active" onClick={() => setToggle(!toggle)}>Keyboard</NavLink>
                                </div>
                            </div>
                        </div>
                        <NavLink to="/cart" id="cart">
                            <div className="cart">
                                <img src={cart} alt="cart" />
                                <p>{arr.length > 0 && arr.reduce((data, index) => {
                                    return data + index;
                                }) || 0}</p>
                            </div>
                        </NavLink>
                    </header>

                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/laptop">
                        <Laptop />
                    </Route>
                    <Route path="/phone">
                        <Phone />
                    </Route>
                    <Route path="/keyboard">
                        <Keyboard />
                    </Route>
                    <footer>
                        <p>&copy; 2021 NinjaStore | developed by <a href="https://www.github.com/Pagnavathcoding">Pagnavath</a>, All rights reserved.</p>
                    </footer>
                </main>
            </Context.Provider>
        </Router>
    )
}
export default App;