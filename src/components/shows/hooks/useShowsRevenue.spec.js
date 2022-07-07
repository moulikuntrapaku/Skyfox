import {renderHook} from "@testing-library/react-hooks";
import useShowsRevenue from "./useShowsRevenue";
import showsService from "../services/showsService";
import moment from "moment";
import {when} from "jest-when";

jest.mock("../services/showsService", () => ({
    __esModule: true,
    default: {
        getRevenue: jest.fn()
    }
}));

describe("Basic logic", () => {
    let showDate;

    beforeEach(() => {
        showDate = moment("2020-01-01", "YYYY-MM-DD");
        when(showsService.getRevenue).calledWith("2020-01-01").mockResolvedValue(549.99);
    });

    it("Should initialize the hook with zero shows", () => {
        const {result} = renderHook(() => useShowsRevenue(showDate));

        const {showsRevenue, isAdmin} = result.current;

        expect(showsRevenue).toEqual(0);
        expect(isAdmin).toBe(false);
    });

    it("Should get shows revenue ",() => {
        const {result} = renderHook(() => useShowsRevenue(showDate));

        const {showsRevenue, isAdmin} = result.current;

        expect(showsRevenue).toEqual(0);
        expect(isAdmin).not.toBeDefined;
    });
});
