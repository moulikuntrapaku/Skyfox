import React from "react";
import {shallow} from "enzyme";
import ScheduleShow from "./ScheduleShow";
import {render,fireEvent} from "@testing-library/react";
import {screen} from '@testing-library/dom'
import moment from "moment";
describe("Basic rendering",()=>{
    const openDialog = true;
    const onClose = jest.fn();
    const updateShowRevenue = jest.fn();
    const showsDate=moment();
    const shows = [{
        id: 1,
        cost: 150,
        movie: {
            name: "Movie 1",
            plot: "Suspense movie",
            duration: "1hr 30m",
            imdbRating: "7"
        },
        slot: {startTime: "start time 1"}
    },
    {
        id: 2,
        cost: 150,
        movie: {
            name: "Movie 2",
            plot: "Suspense movie",
            duration: "1hr 30m",
            imdbRating: "7"
        },
        slot: {startTime: "start time 1"}
    }];
    it("Should show Schedule Movie Button if Admin", () => {
        const scheduleShow = shallow(<ScheduleShow showsDate={showsDate} isAdmin={true} shows={shows}/>);
        let scheduleMovieButton=scheduleShow.find(ScheduleShow);
        expect(scheduleMovieButton).toBeDefined;
    });
    it("Should not show Schedule Movie if Customer", () => {
        const scheduleShow = shallow(<ScheduleShow showsDate={showsDate} isAdmin={false} shows={shows}/>);
        const scheduleMovieButton = scheduleShow.find(ScheduleShow);
        expect(scheduleMovieButton).not.toBeDefined;
    });
    // it("Should show slot checklist", () => {
    //     const slot = render(<ScheduleShow isAdmin={true}/>);
    //     const checklist = screen.getByRole("Checklist");
    //     expect(checklist).toBeDefined;
    // });
    it("Should display schedule movie when scheduled movie button is clicked", () => {
        const {getByText, queryByText} = render(<ScheduleShow showsDate={showsDate} isAdmin={true} shows={shows}/>);
        expect(queryByText("Slots")).toBeNull();
        fireEvent.click(screen.getByRole('button'));
        expect(getByText("Slots")).toBeTruthy();
    });
})