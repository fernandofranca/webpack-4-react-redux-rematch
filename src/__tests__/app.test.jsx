import React from "react"
import { shallow, mount } from "enzyme"
import Component from "../App.js"

describe("App component", () => {
  it("Should render without errors.", () => {
    const component = mount(<Component />)
  })
})