import dash_tailwind_component
from dash import Dash, callback, html, Input, Output

# Tailwind CSS script
external_script = ["https://tailwindcss.com/", {"src": "https://cdn.tailwindcss.com"}]

navitemslist_py = [
                {
                    "name": 'Zeros',
                    "href": '/zeros'
                },
                {
                    "name": 'Customer',
                    "href": '/customer'
                }
            ]

app = Dash(__name__,
   external_scripts=external_script
   )

app.layout = html.Div([
    dash_tailwind_component.NavBar(
        id='input',
        navitems=navitemslist_py,
        company = 'Truck Fuel Network',
        logo='https://miongyrn.sirv.com/tfn.png',
        docurl='https://docs.google.com/document/u/0/'
    ),
    html.Div(id='output')
])

if __name__ == '__main__':
    app.run_server(debug=True)
