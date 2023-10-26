import {render, RenderResult} from "@testing-library/react";
import { beforeEach, describe } from "node:test";
import { Input } from "./index";

describe("Input", () => {
    let renderResult: RenderResult;
    beforeEach(() => {
        renderResult = render(<Input id="username" label="Username" />);
    });

});