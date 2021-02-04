import React, { Component } from "react";
import { DataTypes } from "./Types";

export class DataGetter extends Component {
    render() {
        const { children } = this.props;
        return <React.Fragment>{ children }</React.Fragment>
    }

    componentDidMount = () => this.getData();
    componentDidUpdate = () => this.getData();

    getData = () => {
        const { products_params, pageSize, sortKey, match, loadData } = this.props;
        const dsData = products_params || {};

        const rtData = {
            _limit: pageSize || 5,
            _sort: sortKey || "name",
            _page: match.params.page || 1,
            category_like: (match.params.category || "") === "all" ? "" : match.params.category
        }

        if(Object.keys(rtData).find(key => dsData[key] !== rtData[key]))
            loadData(DataTypes.PRODUCTS, rtData);
    }
}