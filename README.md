# Dongle Library

An online library for teachers and educators in remote areas to search, categorize and download collections of books. (Microsoft Hackathon 2019)

## How The App Works
This is the front-end website that let users search for books, add books to cart and download books. It fetches book data from our Azure Search back-end that aggregates books from different sources (only from [Project Gutenberg](http://www.gutenberg.org/) for now).

Live Demo on [Github Page](https://donglelibrary.github.io/front-end/).

## To run the app locally
Install [Create React App](https://github.com/facebook/create-react-app) to begin building apps with React!

Then, clone the app or download the app as a zip file:
```
git clone https://github.com/donglelibrary/front-end.git
cd front-end
```
Next, install all project dependencies with
```
npm install
```

Finally, start the development server with
```
npm start
```

**Note:** the service worker is included in the production build.

## Implemented functionalities
* [x] Interface Design:
  * [x] Responsiveness: All application components render on-screen in a responsive manner.
  * [x] Usability: All application components are usable across modern desktop, tablet, and phone browsers.
* [x] Application Functionality:
  * [x] Search functionality: based on book name and author name.
  * [x] Filter functionality: can filter based on one or more categories.
  * [x] Cart functionalities: add and remove books from cart.
  * [x] Book download: allow to download one book at a time.
  * [ ] Explore page: not fully functioning yet, but it shows the idea of browsing other people's book collections.
  * [ ] Favorite page:  not fully functioning yet, but users can see their favorite collections here.
    
## Developers:
- Udit S.
- Malvika M.
- MinhKhang Vu
- Michelle Lee