# Dog API - Coderbyte challenge

This is a small app that uses the [Dog API](https://dog.ceo/dog-api/)

## Installation

Clone the repo and run `yarn install`

## Brief description

The app is a simple React app that uses the Dog API to fetch randoms images of dogs and display it on the screen.
The user can make use of the following functionalities/requirements:<br>

### Home Page

1- Search breed by name.<br>
2- When card is clicked navigate to breed page.<br>

### Breed Page

1- List of pictures of the breed.<br>
2- Paginate.<br>
3- Button Add to my team to each dog, it should be added to the users team. (the dog, not the breed).<br>
5- The user teams can have maximum of 10 dogs.<br>
6- Cannot have more than 3 dogs of the same breed..<br>

### My Team Page

1- Should display the users team..<br>
2- Should be grouped by breed in the UI.<br>
3- Add button to remove a dog from the user team.<br>
4- Save the data locally.<br>

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Learn More

You can learn more in the [Create React App with Vitejs documentation](https://vitejs.dev/guide/#trying-vite-online).

To learn React, check out the [React documentation](https://reactjs.org/).

## Author

- [Emanuel Delgado](https://www.linkedin.com/in/emadevjs/)

## Deployment

This app is deployed on [Netlify](https://netlify.com/)

You can check it out [here](https://dog-api-coderbyte.netlify.app/)
