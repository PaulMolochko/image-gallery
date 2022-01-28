# The Image Gallery

The image gallery excercise from Mozilla Wed Development Course

## Steps to complete

The following sections are provided by Mozilla instructors and describe what needs to be done.

### Declare an array of image filenames

You need to create an array listing the filenames of all the image to include in the gallery. The array should be declared as a constant.

#### Looping through the images

We've already provided you with lines that store a reference to the thumb-bar `<div>` inside a constant called `thumbBar`, create a new `<img>` element, set its `src` attribute to a placeholder value xxx, and append this new `<img>` element inside `thumbBar`.

You need to:

1. Put the section of code below the "Looping through images" comment inside a loop that loops through all the filenames in the array.

2. In each loop iteration, replace the `xxx` placeholder value with a string that will equal the path to the image in each case. We are setting the value of the `src` attribute to this value in each case. Bear in mind that in each case, the image is inside the images directory and its name is pic1.jpg, pic2.jpg, etc.

#### Adding a click event listener to each thumbnail image

In each loop iteration, you need to add a `click` event listener to the current `newImage` — this listener should find the value of the `src` attribute of the current image. Set the `src` attribute value of the displayed-img `<img>` to the `src` value passed in as a parameter.

Alternatively, you can add one event listener to the thumb bar.

#### Writing a handler that runs the darken/lighten button

That just leaves our darken/lighten `<button>` — we've already provided a line that stores a reference to the `<button>` in a constant called `btn`. You need to add a click event listener that:

1. Checks the current class name set on the `<button>` — you can again achieve this by using `getAttribute()`.

2. If the class name is "dark", changes the `<button>` class to "light" (using `setAttribute()`), its text content to "Lighten", and the `background-color` of the overlay `<div>` to "rgba(0,0,0,0.5)".

3. If the class name is not "dark", changes the `<button>` class to "dark", its text content back to "Darken", and the background-color of the overlay `<div>` to "rgba(0,0,0,0)".

The following lines provide a basis for achieving the changes stipulated in points 2 and 3 above.

```js

btn.setAttribute('class', xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;