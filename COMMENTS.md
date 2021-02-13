# Comments on how I approached this

There's some explanations in the code, but this file might be handy.

## Tests

There aren't any! I ran out of time, sadly. I'm a big user of Cypress, although it's not without is faults, particularly with React apps. I like to add data attributes to elements so that they are easier to select with frontend testing frameworks.

I would have written tests to check the filter worked - would have gone through the mock data to find a post that _wasn't_ about Marketing and Automation and checked that it was not found, then changed the filter to All and then Marketing and Automation and checked that it _was_ found.

Also, testing the Load More button and how it works when the filter is applited.

## Avatars

I made a custom `<img>` wrapper to display initials in a circle if the image load fails, rather than displaying a small dot (the border was collapsing) - a bit like Microsoft Teams :)
I took the liberty of changing `data.json` so this always happens - but the robot api sometimes fails on its own.

## CSS

Most styles are applied using the Styled-Components library, so these are on a per component basis, and are scoped to avoid namespace pollution.

There is a regular CSS file imported. Currently this only adds the keyframes for the spinner component, but would include typography and global styles.

Ideally I'd be defining CSS custom properties here and referring to them elsewhere. Or SASS variables, if Internet Explorer needs to be supported :)

## React

It uses hooks throughout, although there isn't a lot of state required in this assignment.
There's a custom hook in src/api/index.js which handles the fetching of the data, and includes a basic finite state machine for handling the status of the request. This helps avoid having to manage multiple booleans like isLoading and wasError.

## Browser Compatability

It's only tested in Firefox and Chrome as that's all I have on this Linux laptop. It _WON'T_ work in Internet Explorer. Babel would be able to handle some of it when transpiling, but these would need either polyfilling or doing differently:

- The `Intl` browser API - I used this to format dates. You could roll your own, or use a library.
- Promises - would need polyfilling
- CSS Grid - just use something else - actually this should look usable in IE because it will fall back to the order in the markup. I can't test it though, because I don't have a windows machine any more :)
- Array.flatmap would require a polyfill - I was quite excited to get to use it though!

## Filtering Posts

This is a bit of a weird one because the categories in the mocked data don't have the same IDs for the same category. So I had to filter based on the actual text of the category. This required a bit of object/array manipulation to deduplicate etc. It would _work_ this way with real data too... but if it's coming from a relational database, it'd be better to use the IDs.

## Pagination

The mock API call gives you all the data at once - so pagination is basically handled client side, and stores a value in a `useState` hook for how many are posts are visible and adds 5 to it when you click Load More. We then hide that button when the state value is as big as how many posts there are in total. I think you'd handle pagination on the server IRL though - which would make the client work harder, as you'd have to either hammer the API or maintain a cache.

## Components

I started with PostList and it was obvious Post would be its own component too. I made new components where the code was getting messy, or where it might be reused. They're all in the same folder, but at some point soon you'd want to organise them a bit more!
