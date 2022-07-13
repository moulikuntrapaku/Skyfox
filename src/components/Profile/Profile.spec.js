import { when } from "jest-when";
import apiService from "../../helpers/apiService";
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { shallow } from "enzyme";
import Profile from "./Profile";
import useProfile from "./hooks/useProfile";
import profileService from "./services/profileService";

jest.mock('../../helpers/apiService');


jest.mock("./hooks/useProfile", () => ({
    __esModule: true,
    default: jest.fn()
}));

describe("Basic rendering and functionality", () => {

    beforeEach(() => {
        when(useProfile).calledWith().mockReturnValue({
            profileLoading: false,
            profile:
            {
                id: 5,
                name: "Tom",
                username: "tom"
            }
        });
    });

    it("Should display profile info", () => {
        const profile = render(<Profile />);

        profile.getByText("User Profile");
        profile.getByText("Name:Tom");
        profile.getByText("Username:tom");

    });
});



describe('Profile Service', () => {

    it('should return profile', async () => {
        const data = [{
            id: 8,
            name: "jim",
            username: "tim"
        }];

        apiService.get.mockResolvedValue({ data: data });
        const prof = await profileService.fetch();

        expect(prof).toEqual([{
            id: 8,
            name: "jim",
            username: "tim"
        }]);
    });


});

