#!/usr/bin/env node

const fs = require('fs');


//defining my custom file structure
const projectStructure = {
  'src': ['index.js'],
  'public': ['index.html', 'styles.css'],
  'components': ['mycomponent.js'],
  'models': ['user.js'],
  'routes': ['myroutes.js']
}

Object.entries(projectStructure).forEach(([dir, files]) =>{
  //create directories
  fs.mkdirSync(dir, {recursive:true});

  //to create files
  files.forEach(file => fs.writeFileSync(`${dir}/${file}`, ''));
});

console.log("Custom React Project by Shrikrushna has been created successfully!");
