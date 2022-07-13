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

