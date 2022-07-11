import React from "react";
import {shallow} from "enzyme";
import ScheduleShow from "./ScheduleShow";

describe("Basic rendering",()=>{
    it("Should show Schedule Movie Button if Admin", () => {
        const scheduleShow = shallow(<ScheduleShow isAdmin={true}/>);

        let scheduleMovieButton=scheduleShow.find(ScheduleShow);

        expect(scheduleMovieButton).toBeDefined;
    });
    it("Should not show Schedule Movie if Customer", () => {
        const scheduleShow = shallow(<ScheduleShow isAdmin={false}/>);

        const scheduleMovieButton = scheduleShow.find(ScheduleShow);

        expect(scheduleMovieButton).not.toBeDefined;
    });
})

