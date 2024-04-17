import "./App.css";
import {Component} from "react";
import itemInfo from "./components/ShowItemClass/itemInfo.js";
import ShopItemClass from "./components/ShowItemClass/shopItemClass.jsx";

export default class App extends Component {
    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <div className="container">
                <div className="background-element">
                </div>
                <div className="highlight-window">
                    <div className="highlight-overlay"></div>
                </div>
                <div className="window">
                    <ShopItemClass {...itemInfo}/>
                </div>
            </div>
        );
    }

}

