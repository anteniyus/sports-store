import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CategoryNavigation extends Component{
    render() {
        const { baseUrl, categories } = this.props;

        return <React.Fragment>
            <Link className="btn btn-secondary btn-block" to={baseUrl}>All</Link>
            {
                categories && categories.map(category =>
                    <Link className="btn btn-secondary btn-block" key={category} to={`${baseUrl}/${category.toLowerCase()}`}>
                        { category }
                    </Link>
                )
            }
        </React.Fragment>;
    }
}
