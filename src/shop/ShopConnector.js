import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "../data/ActionCreators";
import { addToCart, updateCartQuantity, removeFromCart, clearCart } from "../data/CartActionCreators";
import { DataTypes } from "../data/Types";
import { Shop } from "./Shop";
import {CartDetails} from "./CardDetails";
import {DataGetter} from "../data/DataGetter";

const mapStateToProps = (dataStore) => ({
    ...dataStore
});

const mapDispatchToProps = {
    loadData,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart
};

// const filterProducts = (products = [], category) =>
//     (!category || category === "ALL") ? products : products.filter(product => product.category.toLowerCase() === category.toLowerCase());

export const ShopConnector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        render() {
            // const { products } = this.props;

            return <Switch>
                {/*<Route path="/shop/products/:category?"*/}
                {/*       render={(routeProps) =>*/}
                {/*            <Shop { ...this.props } { ...routeProps } products={ filterProducts(products, routeProps.match.params.category) } />*/}
                {/*       }*/}
                {/*/>*/}

                <Redirect from="/shop/products/:category" to="/shop/products/:category/1" exact={ true } />

                <Route path={ "/shop/products/:category/:page" }
                       render={ (routerProps) =>
                            <DataGetter { ...this.props } { ...routerProps}>
                                <Shop { ...this.props } { ...routerProps } />
                            </DataGetter>
                       }
                />

                <Route path="/shop/cart" render={(routerProps) => <CartDetails { ...this.props } { ...routerProps } />} />

                <Redirect to="/shop/products/all/1" />

                {/*<Redirect to="/shop/products" />*/}
            </Switch>
        }

        componentDidMount() {
            const { loadData } = this.props;

            loadData(DataTypes.CATEGORIES);
            // loadData(DataTypes.PRODUCTS);
        }
    }
);