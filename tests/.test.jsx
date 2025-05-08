import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import App from "../src/App";
import Card from "../src/components/card";
import Footer from "../src/components/footer";

describe("App", () => {
  it("renders", () => {
    render(<App />);
    expect(screen.queryByText("Victor Crest")).toBeVisible();
  });
});

describe("Card", () => {
  it("renders the profile image with correct src", () => {
    render(<Card />);
    const img = screen.getByRole("img");
    expect(img.src).toContain("image-victor.jpg");
  });
});

describe("Footer", () => {
  it("renders the footer links with the correct href", () => {
    const links = [
      {
        label: "Frontend Mentor",
        url: "https://www.frontendmentor.io?ref=challenge",
      },
      { label: "Github", url: "https://github.com/jjdavenport" },
    ];
    render(<Footer links={links} />);
    expect(
      screen.getByRole("link", { name: /frontend mentor/i }),
    ).toHaveAttribute("href", "https://www.frontendmentor.io?ref=challenge");
    expect(screen.getByRole("link", { name: /jjdavenport/i })).toHaveAttribute(
      "href",
      "https://github.com/jjdavenport",
    );
  });
});
