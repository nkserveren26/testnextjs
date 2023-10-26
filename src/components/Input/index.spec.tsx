import {render, RenderResult} from "@testing-library/react";
import { afterEach, beforeEach, describe } from "node:test";
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



});