# React SVG Icon Component
I decide to port my current SVG Icon Component strategy that I have been using on my Vue.js projects after a tweet I saw.

[Link for the tweet](https://twitter.com/_developit/status/1382838799420514317?s=20)

## Disclaimer
I did not come up with the original idea and unfortunately I can't find the original medium post with this strategy using Vue.js. If you know the author of said post, let me know so I can properly credit him.

## Prerequisites
Have Node.js version >= 14 installed on your machine

## Installing
Clone the repository
```sh
git clone https://github.com/ToniMaunde/react-svg-component.git
```

Then navigate inside the folder
```sh
cd react-svg-component
```

Install the dependencies with
```sh
npm install
```

After that is done, just run
```sh
npm run dev
```

## How it works
The whole idea behind this "system" is to be able to use SVGs freely without losing the ability of styling and animating them in our apps. To achieve this, we store create a JSON file with all the paths and names of for our SVGs. Check the file [here](src/assets/iconPaths.json).

The gotcha is that every single SVG identifier in our JSON file has to have only one path otherwise our Icon component can become more complex to work with (even though I can think of ways you could use more than one path SVGs with it).

So...

1. You export your SVG from wherever and make sure it only has one path.
2. Create a new entry in the iconPaths.json file and it should be something like this

   ```json
    "iconName": {
      "viewBox": "0 0 30 30", - an example
      "d": "the path of the svg goes here"
    }
   ```
   If you don't understand what SVGs are and how they work, check out [this CSS Tricks article](https://css-tricks.com/using-svg/) and search for Sarah Drasner's videos on Youtube regarding SVGs.
3. In the Icon.jsx file we have
   ```javascript
    import React, { useState } from 'react'
    import icons from "../assets/iconPaths.json"

    export default function Icon({iconName}) {

    const svgViewBox = icons[iconName].viewBox
    const svgPath = icons[iconName].d

    const svgClass = () => {
    if (svgViewBox === "0 0 18 18") return "icon icon-small"
    else if (svgViewBox === "0 0 24 24") return "icon icon-normal"
    else if (svgViewBox === "0 0 36 36") return "icon icon-medium"
    return "icon icon-large"
    }

    return (
      <svg viewBox={svgViewBox} className={svgClass()}>
        <path d={svgPath}/>
      </svg>
      )
    }
   ```
   The iconPath.json file is imported as **icons**. Then we destructure the props that are going to be passed to the component in order to grab the iconName.

   The **svgViewBox** and the **svgPath** attributes grab their values from the icons import via the attributes available in the json. Finally, the **svgClass** function returns the classes depending on the svgViewBox attribute that was previously computed. These classes can later on be used to style the icon.

4. Import the Icon element to wherever you want to use
   ```javascript
    import Icon from "./components/Icon";

    ...
    return (
    <ul className="react-logos">
      <li className="react-logos__card">
        <Icon iconName="react18"/>
        <p className="react-logos__label">18*18 icon</p>
      </li >
      <li className="react-logos__card">
        <Icon iconName="react24"/>
        <p className="react-logos__label">24*24 icon</p>
      </li>
      <li className="react-logos__card">
        <Icon iconName="react36"/>
        <p className="react-logos__label">36*36 icon</p>
      </li>
      <li className="react-logos__card">
        <Icon iconName="react48"/>
        <p className="react-logos__label">48*48 icon</p>
      </li>
    </ul>
    )
   ```
   As you can see, we pass the name of the icon we want to render as a prop named **iconName** just like we previously set in our Icon.jsx file. The rest is just my BEM CSS styles for making this look good.

5. And that's all she wrote.

## Built with
I used [Vite.js](https://vitejs.dev/) by Evan you to quickly scaffold this "project".

## Contributing
I doubt this is going to get any traction or become anything popular, but if you want to contribute in any way, feel free. I would be glad to gain some OSS experience.

## Authors
Myself, inspired by the aforementioned tweet and medium post.

## License
Completely and utterly free.