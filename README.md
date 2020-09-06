# Just A Typescript Practice And Reference
Just a typescript practice and reference.

## Transiling Typescript to Javascript
### Direct Approach
Use ts-node to directly run a typescript file.
Requirements:
```
npm install -g ts-node
npm install -g typescript
```
Then, from now on:
```ts-node filename.ts```

### parcel
In the maps folder (example), run ```parcel index.html```
It will generate the dist folder and run a server.

### tsc
example code in sort folder
1. create two folders:
  
    1) src folder: place ts files here.
    2) build folder: tsc will automatically transpile ts files to js files and palce in this folder if you set it in tsconfig.json as below.
    
2. ```tsc --init``` will create tsconfig.json
3. Specify root and output directories in tsconfig.json as below.
    ```
         "outDir": "./build",                        /* Redirect output structure to the directory. */
         "rootDir": "./src",     
    ```
4. After above, from now you can just do the below command to transpile.
    ```
        tsc -w    
    ```
    -w means watch continuously.

5. Running the transpiled code as well as transpiling in watch mode.

    Requirements
    ```
    npm install nodemon concurrently
    ```
   In package.json
   ```
    "scripts": {
      "start:build": "tsc -w",
      "start:run": "nodemon build/index.js",
      "start": "concurrently npm:start:*"
    },
   ```
    Then, from now on, you can just ```npm start```


reference: https://www.udemy.com/course/typescript-the-complete-developers-guide