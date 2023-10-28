import {render, RenderResult, screen} from "@testing-library/react";
import { afterEach, beforeEach, describe, it } from "node:test";
import { Input } from "./index";

describe("Input", () => {
    let renderResult: RenderResult;

    //テストケース前にコンポーネントを描画し、renderResultにセット
    beforeEach(() => {
        renderResult = render(<Input id="username" label="Username" />);
    });

    //テストケース実行後に描画していたコンポーネントを開放する
    afterEach(() => {
        renderResult.unmount();
    });

    it("should empty in input on initial render", ()=> {
        const inputNode = screen.getByLabelText("Username") as HTMLInputElement;

        expect(inputNode).toHaveValue("");
    });



});