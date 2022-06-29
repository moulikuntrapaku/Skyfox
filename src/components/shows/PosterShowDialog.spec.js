import React from "react";
import {screen, render} from "@testing-library/react";
import '@testing-library/jest-dom';
import PosterShowDialog from './PosterShowDialog';


describe("Basic rendering and functionality", () => {
    const openDialog = true;
    const onClose = jest.fn();

    const selectedShow = {
        movie: {
            name: "Movie 1",
            poster: "url.com"
        }
    };

    it("Should display the movie title", () => {
        const {queryByText} = render(<PosterShowDialog selectedShow={selectedShow.movie.name}
                                                                               open={openDialog} onClose={onClose}
                                                                               posterUrl={selectedShow.movie.poster}/>);

        expect(queryByText(selectedShow.movie.name)).toBeTruthy();
    });
    it("Should display the movie poster", () => {
        const {getByAlttext} = render(<PosterShowDialog selectedShow={selectedShow.movie.name}
                                                                               open={openDialog} onClose={onClose}
                                                                               posterUrl={selectedShow.movie.poster}/>);
        const poster = screen.getByRole('img');
        expect(poster).toHaveAttribute('src',selectedShow.movie.poster);
    });

});
