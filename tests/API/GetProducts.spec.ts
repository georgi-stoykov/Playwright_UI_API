import { test, expect } from "@playwright/test";
import Env from "../../utils/Env";

test.describe("Get products", {tag: "@api"}, () => {

    test("Products can be retrieved", async ({ request }) => {
        let url = new URL('/products', Env.BaseApiUrl).toString();
        const response = await request.get(url);

        expect(response.status()).toBe(200);
        var responseData = await response.json();
        expect(responseData).not.toBeNull();
        expect(responseData.data.length).toEqual(9);
    });
});
