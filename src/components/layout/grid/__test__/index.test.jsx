import React from "react";
import { shallow } from "enzyme";

import Grid from "..";

describe("components/Grid.Wrapper", () => {
  it("should render a grid", () => {
    const $ = shallow(
      <Grid>
        <span />
      </Grid>
    );

    expect($.hasClass("lr-o-grid")).toBe(true);
  });

  it("should render its children", () => {
    const $ = shallow(
      <Grid>
        <span />
      </Grid>
    );

    expect($.find("span").exists()).toBe(true);
  });

  it("should wrap its children in GridItems", () => {
    const $ = shallow(
      <Grid>
        <span />
      </Grid>
    );

    expect($.find("GridItem").exists()).toBe(true);
  });

  it("should apply css classes", () => {
    const $ = shallow(
      <Grid className="test">
        <span />
      </Grid>
    );

    expect($.hasClass("test")).toBe(true);
  });
});
