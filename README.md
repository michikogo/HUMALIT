# HUMALIT Final Output
Simple static website that is used as the final output for HUMALIT. The site contains articles and analysis relating to the given theme. 

This project was created with `vue` and `bootstrap-vue`.

## Working Site
https://michikogo.github.io/HUMALIT-FinalOutput/#/

## Installation
1. Clone the respiratory 
   ```bash
   https://github.com/michikogo/KakaibaEcom.git
   ```
2. Initialize package.json (in cmd)
   ```bash
   npm init
   ```
3.  Run the code
   ```bash
   vue ui
   ```
4. In vue UI to to `Task` then `Serve` then `Run Output` once it is executed click `Open App`

### Vue Installation
1. Download vue in cmd 
   ```bash
   npm install -g @vue/cli
   ```

### Vue Deployment 
1. Deploying the project type the following in cmd:
   ```bash
   npm run build
   ```
2. Create a new branch usually named gh-pages and place the dist folder executed from the npm run build in the branch gh-pages 

## Branches
- master - main project code
- gh pages - deployment

## Webpages
Webpage | Description | Libraries
| :---: | :---: | :---:
Home | Shows the different text and videos. It is similar to a feed |  `vue`, `bootstrap-vue`
Members | Shows the theme of the project and the members who contributed | `vue`, `bootstrap-vue`
Specific Text & Video | Shows the text or video and analysis of the text given | `vue`, `bootstrap-vue`
Authors | Shows the author's bio | `vue`, `bootstrap-vue`
