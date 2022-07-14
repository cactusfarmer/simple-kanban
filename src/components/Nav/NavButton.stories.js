import React from "react";

import { NavButton } from "./NavButton";

export default {
    component: NavButton,
    title: "Nav button"
}

const Template = args => <NavButton {...args} />

export const Default = Template.bind({})
Default.args = {children: "Building work"}

export const Selected = Template.bind({})
Selected.args = {...Default.args, selected: true }
