# React SVG Icon Component
I decide to port my current SVG Icon Component strategy that I have been using on my Vue.js projects after a tweet I saw.

[Link for the tweet](https://twitter.com/_developit/status/1382838799420514317?s=20)

# Changelog
21/02/2022
- added a new property to the Icon component
- added for examples of styled icons + an hover state animation

15/12/2021
- moved the project to Typescript

21/04/2021
- discarded the iconPaths.json file
- added the icons.js to export icons as modules
- Icon.jsx now receives the icon object instead of a string as a prop

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
The whole idea behind this "system" is to be able to use SVGs freely without losing the ability of styling and animating them in our apps. To achieve this, we create modules that contain the path and the viewBox of our icons in the [here](./src/assets/icons.js).

The gotcha, for now, is that every single icon module has to have a single path, otherwise our Icon component can become more complex to work with.

So, for now...

1. You export your SVG from any software of your preference and make sure it only has one path.
2. Create a new module in the icons.js file and it should be something like this

   ```javascript
    const iconName =  {
      viewBox: "0 0 30 30", //an example
      d: "the path of the svg goes here"
    }
    ...
    export {iconName, otherIcon}
   ```
   If you don't understand what SVGs are and how they work, check out [this CSS Tricks article](https://css-tricks.com/using-svg/) and search for Sarah Drasner's videos on Youtube regarding SVGs.
3. In the Icon.jsx file we have
   ```javascript
    import React from 'react'

    export default function Icon(props) {
      const {viewBox: svgViewBox, d: svgPath} = props.icon

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
   The icon to be rendered is passed as a prop through the icon object. The **svgViewBox** and the **svgPath** attributes are a result of destructuring the icon prop. Finally, the **svgClass** function returns the classes depending on the svgViewBox attribute value. Tweak this function to suit your purposes. These classes can later on be used to style the icon[s].

4. Import the Icon component and the icon you wish to render
   ```javascript
    import Icon from "./components/Icon"
    // here we are importing the icon with the name "react18" from the icon.js file
    import { react18 } from "./assets/icons"

    return (
    <ul className="react-logos">
      <li className="react-logos__card">
        <Icon icon={react18}/>
        <p className="react-logos__label">18*18 icon</p>
      </li >
    </ul>
    )
   ```
   As you can see, we pass the icon we imported as a prop named **icon** as our Icon component expects. The rest is just my BEM CSS styles for making this look good.

5. And that's all she wrote.

## Built with
I used [Vite.js](https://vitejs.dev/) by Evan you to quickly scaffold this "project".

## Contributing
I doubt this is going to get any traction or become anything popular, but if you want to contribute in any way, feel free. I would be glad to gain some OSS experience.

## Authors
Myself, inspired by the aforementioned tweet and medium post.

## License
The MIT license.