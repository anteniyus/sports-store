import React, { Component } from "react";
import { ToggleLink } from "../ToggleLink";

export class CategoryNavigation extends Component{
    render() {
        const { baseUrl, categories } = this.props;

        return <React.Fragment>
            <ToggleLink to={ `${baseUrl}/all` } exact={ false }>All</ToggleLink>
            {
                categories && categories.map(category =>
                    <ToggleLink key={category} to={`${baseUrl}/${category.toLowerCase()}`}>
                        { category }
                    </ToggleLink>
                )
            }
        </React.Fragment>;
    }
}
