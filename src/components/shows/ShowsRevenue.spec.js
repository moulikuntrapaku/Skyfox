import React from "react";
import {render} from "@testing-library/react";
import {shallow} from "enzyme";
import ShowsRevenue from "./ShowsRevenue";
import {CircularProgress} from "@material-ui/core";

describe("Basic rendering", () => {

    it("Should show revenue if Admin", () => {
        const showsRevenue = shallow(<ShowsRevenue showsRevenue={549.99} isAdmin={true}/>);

        const revenue = showsRevenue.find(ShowsRevenue);

        expect(revenue).toBeDefined;
    });

    it("Should not show revenue if Customer", () => {
        const showsRevenue = shallow(<ShowsRevenue showsRevenue={0} isAdmin={false}/>);

        const revenue = showsRevenue.find(ShowsRevenue);

        expect(revenue).not.toBeDefined;
    });
});
