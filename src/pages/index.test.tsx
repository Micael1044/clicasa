import "@testing-library/jest-dom";
import { getServerSideProps } from ".";
import reviews from "./api/reviews.json";
import { GetServerSidePropsContext } from "next";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(reviews),
  })
) as jest.Mock;

describe("Index", () => {
  test("Se comprueba que se recuperan los datos con fetch", async () => {
    const context = {
      params: reviews,
    };
    const value = await getServerSideProps(
      context as unknown as GetServerSidePropsContext
    );

    console.log("Value", value);
    expect(value).toStrictEqual({
      props: reviews,
    });
  });
});
