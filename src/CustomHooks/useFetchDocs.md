# Manuel's useFetch Documentation

This is a short Doc to help with the usage of my useFetch() Custom Hook.

## General

Inside of the Component you are in, import useFetch().

The fetch takes 4 arguments in this order:

- url (url for the fetch)
- crud (CRUD Methos as a String)
- body (Body of the Fetch as a js Object)
- bool (Boolean Value to allow triggering the Fetch on click)

## Fire on Mount

To have the hook fetch on Mount just set the bool input to true

## Fire on Click

Create a useState variable that is false and use a click event
to change it to true. Pass that variable as the "bool" argument.

## Fire on Mount and Click

Same as the "only on Click"-Variant but have the initial value of the
Statful Variable be a truthy value. Have the click change it to a
different truthy value. This will trigger the dependency Array of the
useEffect() inside of useFetch().