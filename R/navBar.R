# AUTO GENERATED FILE - DO NOT EDIT

#' @export
navBar <- function(id=NULL, company=NULL, docurl=NULL, logo=NULL, navitems=NULL) {
    
    props <- list(id=id, company=company, docurl=docurl, logo=logo, navitems=navitems)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'NavBar',
        namespace = 'dash_tailwind_component',
        propNames = c('id', 'company', 'docurl', 'logo', 'navitems'),
        package = 'dashTailwindComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
