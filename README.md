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
Have Node.js version >= 14 installed on your machine and knowing a tiny bit of React.js and SVGs.

## Directory Structure
.
├── src
│   ├── assets
│   │   └── icons.ts
│   ├── components
│   │   └── Icon.tsx
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   ├── favicon.svg
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.js

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
      className: "class name(s) go here"
      viewBox: "0 0 30 30", //an example
      d: "the path of the svg goes here"
    }
    ...
    export {iconName, otherIcon}
   ```
   If you don't understand what SVGs are and how they work, check out [this CSS Tricks article](https://css-tricks.com/using-svg/) and search for Sarah Drasner's videos on Youtube regarding SVGs.
3. In the Icon.jsx file we have
   ```javascript
    import { TIcon } from "../types"

    export default function Icon(props: TIcon) {
      const {viewBox: svgViewBox, d: svgPath, className} = props;

      return (
        <svg viewBox={svgViewBox} className={`icon ${className}`}>
          <path d={svgPath}/>
        </svg>
      )
    }
   ```
   The icon to be rendered is passed as a prop through the icon object. The **svgViewBox** and the **svgPath** attributes are a result of destructuring the icon prop. Finally, the **className** will
   allow you to specifically target an icon. I added the "icon" class by default to allow the targetting of 
   all icons.

4. Import the Icon component and the icon you wish to render
   ```javascript
    // here we are importing the Icon component
    import Icon from "./components/Icon"

    // and here we are importing all icons we want to render through the 
    // Icon component as props
    import { react18, react24, react36, react48 } from "./assets/icons"

    function App() {
      return (
        <>
          <h3 className="title">Here is an example</h3>
          <section className="icons-row">
            <Icon {...react18} />
            <Icon {...react24} />
            <Icon {...react36} />
            <Icon {...react48} />
          </section>
        </>
      )
    }
   ```
   As you can see we **deconstruct our icons as props** for the Icon component and it does the rest.

## Built with
I used [Vite.js](https://vitejs.dev/) by Evan you to quickly scaffold this "project".

## Contributing
I doubt this is going to get any traction or become anything popular, but if you want to contribute in any way, feel free. I would be glad to gain some OSS experience.

## Authors
Myself, inspired by the aforementioned tweet and medium post.

## License
The MIT license.