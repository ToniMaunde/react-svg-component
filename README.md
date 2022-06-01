# React SVG Icon Component
I decide to port my current SVG Icon Component strategy that I have been using on my Vue.js projects after a tweet I saw.

[Link for the tweet](https://twitter.com/_developit/status/1382838799420514317?s=20)

# Changelog
01/06/2022
- updated the docs

15/05/2022
- added tree-shaking
- added multi-path rendering
- updated the docs

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
```
├── src
│   ├── assets
│   │   └── anIcon.ts
│   ├── components
│   │   └── Icon.tsx
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
```
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
The whole idea behind this "system" is to be able to use SVGs freely without losing the ability of styling and animating them in our apps. To achieve this, ~~we create modules that contain the path and the viewBox of our icons in the [here](./src/assets/icons.js)~~ we create icons as .ts files in the assets folder that will later on be exported
to our components. This strategy enables tree-shaking.

~~The gotcha, for now, is that every single icon module has to have a single path, otherwise our Icon component can become more complex to work with.~~

~~So, for now...~~
Regardless of the number of paths of the SVG, the Icon component will be able to render it correctly. Here's how you do it.

1. You export your SVG from any software of your preference.
2. Create a new file in the assets folder with the following structure

   ```javascript
    import type { TIcon } from "../components/Icon";
    export const unpinIcon: TIcon = {
    viewBox: "0 0 24 24",
    paths: [
      {
        d: "M 18.8,16 15.3,12.475 V 3.5 H 8.675 V 5.9 L 7.175,4.4 V 3.5 c 0,-0.4 0.15,-0.75 0.45,-1.05 C 7.925,2.15 8.275,2 8.675,2 H 15.3 c 0.4167,0 0.7708,0.14583 1.0625,0.4375 C 16.6542,2.72917 16.8,3.08333 16.8,3.5 v 8 l 2,3 z",
        id: "path1",
      },
      {
        d: "M 21.35,22.825 14.525,16 H 12.8 v 5.25 L 12.05,22 11.3,21.25 V 16 H 5.175 v -1.5 l 2,-3 V 8.675 L 2.575,4.075 3.65,3 22.4,21.775 Z",
        id: "path2",
      },
      {
        d: "m 7.05,14.5 h 6 L 8.675,10.125 V 12 Z",
        id: "path3",
      },
    ],
    title: "unpin icon",
    };
   ```
   If you don't understand what SVGs are and how they work, check out [this CSS Tricks article](https://css-tricks.com/using-svg/) and search for Sarah Drasner's videos on Youtube regarding SVGs.
3. In the Icon.tsx file we have
   ```javascript
    // You can add new props to this type depending on your needs and make the necessary adjustments
    // on the component
    export type TIcon = {
      viewBox: string;
      paths: Array<{
        d: string;
        fillRule?: "nonzero" | "evenodd" | "inherit" | undefined;
        clipRule?: string | number | undefined;
        id?: string;
      }>;
      title: string;
      customClasses?: string;
      id?: string;
    }

    export function Icon(props: TIcon) {
      const {viewBox, paths, customClasses, title, id} = props;

      return (
        <svg viewBox={viewBox} id={id} className={`icon ${customClasses || ""}`}>
          <title id="title" lang="en">{title}</title>
          {paths.map((path, index) => (
            <path key={index} id={path.id} d={path.d} fillRule={path.fillRule} clipRule={path.clipRule} />
          ))}
        </svg>
      )
    }
   ```
   Self-explanatory I believe.

4. Import the Icon component and the icon you wish to render
   ```javascript
    // here we are importing the Icon component
    import { Icon } from "./components/Icon";
    // by importing only the module/file with the icon we wish to render we effectively tree-shake the bundle
    import { unpinIcon } from "./assets/unpin";

    function App() {
      return (
        <main>
          <h3 className="title">Here is an example</h3>
          <section className="icons">
            <Icon {...unpinIcon} />
          </section>
        </main>
      )
    }
   ```
   As you can see we **destructure our icons as props** for the Icon component and it does the rest.

## Built with
I used [Vite.js](https://vitejs.dev/) by Evan You (Vue.js creator) because it's great.

## Contributing
~~I doubt this is going to get any traction or become anything popular, but~~ if you want to contribute in any way, feel free. I would be glad to gain some OSS experience.

## Authors
Myself, inspired by the aforementioned tweet and medium post.

## License
The MIT license.