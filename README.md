# Portfolio

## Summary

- [Technologies](#technologies)
- [Capabilities](#capabilities)
  - [Multi window management](#multi-window-management)
  - [Proxy based on browser locale](#proxy-based-on-browser-locale)
  - [Theme based on browser preferences](#theme-based-on-browser-preferences)
    - [Light theme](#light-theme)
    - [Dark theme](#dark-theme)
  - [Responsive layout](#responsive-layout)
  - [Static image from Next](#static-image-from-next)
  - [Background calculated animation](#background-calculated-animation)

### Technologies 
 - Build with Next 16
 - Sass (Scss)
 - SSR (Server side render)
 - Next Router (Routes)

<div style="display: flex; justify-content: right; width: 100%">
    <a href="#top">Back to top</a>
</div>

### Capabilities

#### Multi window management
 - State controls properties from window like:
    - Position
    - Controls visual from window to animation purpose
        - Open
        - Openning
        - Close
        - Closing
    - Focus
    - Z-Axis change on window focus
    - Drag

<img src="./git/assets/buttons-and-window-animations.gif">

<div style="display: flex; justify-content: right;width: 100%">
    <a href="#top">Back to top</a>
</div>

#### Proxy based on browser locale
 - Redirect to proper route (/en_US or /pt_BR)
 - Individual translate lazy load

<div style="display: flex; justify-content: right; width: 100%">
    <a href="#top">Back to top</a>
</div>

 
#### Theme based on browser preferences
 - Pure css animation

<div style="display: flex; justify-content: right; width: 100%">
    <a href="#top">Back to top</a>
</div>

##### Light theme
<img src="./git/assets/light-mode.webp">

<div style="display: flex; justify-content: right; width: 100%">
    <a href="#top">Back to top</a>
</div>

##### Dark theme
<img src="./git/assets/dark-mode.webp">

<div style="display: flex; justify-content: right; width: 100%">
    <a href="#top">Back to top</a>
</div>

#### Responsive layout
 - Swap dragable window for bottomsheet and drop the multi window in smaller screens.

<img src="./git/assets/buttons-and-window-animations-mobile.gif">

<div style="display: flex; justify-content: right; width: 100%">
    <a href="#top">Back to top</a>
</div>

#### Static image from Next
 - All images are served as static with Next
 - All images are cached with Next

<div style="display: flex; justify-content: right; width: 100%">
    <a href="#top">Back to top</a>
</div>

#### Background calculated animation
 - Values based on viewport
 - Scss function calculate based on how many colors background will have (minimun of 3)

<img src="./git/assets/calculated-background-animation.gif">

<div style="display: flex; justify-content: right; width: 100%">
    <a href="#top">Back to top</a>
</div>
