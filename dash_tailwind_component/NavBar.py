# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class NavBar(Component):
    """A NavBar component.
Simple dark Nav Bar with mobile menu button on left.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- company (string; optional):
    The name of the client.

- docurl (string; optional):
    External google doc with documentation on using the dash for end
    users.

- logo (string; optional):
    Sirv hosted url of the clients logo.

- navitems (list; optional):
    The Nav Bar items with their href."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_tailwind_component'
    _type = 'NavBar'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, navitems=Component.UNDEFINED, company=Component.UNDEFINED, logo=Component.UNDEFINED, docurl=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'company', 'docurl', 'logo', 'navitems']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'company', 'docurl', 'logo', 'navitems']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(NavBar, self).__init__(**args)
