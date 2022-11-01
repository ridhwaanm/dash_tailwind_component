# AUTO GENERATED FILE - DO NOT EDIT

export navbar

"""
    navbar(;kwargs...)

A NavBar component.
Simple dark Nav Bar with mobile menu button on left.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `company` (String; optional): The name of the client.
- `docurl` (String; optional): External google doc with documentation on using the dash for end users
- `logo` (String; optional): Sirv hosted url of the clients logo.
- `navitems` (Array; optional): The Nav Bar items with their href.
"""
function navbar(; kwargs...)
        available_props = Symbol[:id, :company, :docurl, :logo, :navitems]
        wild_props = Symbol[]
        return Component("navbar", "NavBar", "dash_tailwind_component", available_props, wild_props; kwargs...)
end

