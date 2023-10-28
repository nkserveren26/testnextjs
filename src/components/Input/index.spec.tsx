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

    //jestのテストでは、各テストを実行するたびにDOMがクリーンアップされるので、各テストの中で対象コンポーネントをレンダリング
    test("should empty in input on initial render", ()=> {
        render(<Input id="username" label="Username" />);
        const input = screen.getByLabelText("Username") as HTMLInputElement; // 対象の要素をクエリで取得

        expect(input.value).toBe(""); // 対象の要素が期待した状態になっているか確認
    });

});