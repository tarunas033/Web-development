import {render,screen} from "@testing-library/jest-dom";
import { Button } from "../Components/Button";

describe ("Test my Button Component",() => {
    // whether button is present on DOM or not
    it("Button should be present on the DOM" , () => {
        render (
            <Button color ="red" size="large">
                Click Me
            </Button>
        );
        screen.debug();
        const button = screen.getByText("click Me");
        expect(button).toBeInTheDocument();
        //getAllByTestId == [elements]
        //getByTestId == first element it finds
       });

    })
