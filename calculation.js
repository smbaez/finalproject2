var data = require('./final_db.json')

var libRank= []
var parkRank =[]
var gardenRank=[]
var artRank=[]
var storeRank=[]

data.zipcodes.forEach(function(item){
   libRank.push(item.libraries.length)
    parkRank.push(item.parks.length)
    if(item.gardens){
    gardenRank.push(item.gardens.length)}
    if(item.art_galleries){
    artRank.push(item.art_galleries.length)}
    if(item.stores){
    storeRank.push(item.stores.length)}
})

libRank2=[]
parkRank2=[]
gardenRank2=[]
artRank2=[]
storeRank2=[]

libRank.forEach(function(item){
    item = (item/3)*100
    libRank2.push(item)
})

parkRank.forEach(function(item){
    item = (item/41)*100
    parkRank2.push(item)
})

gardenRank.forEach(function(item){
    item = (item/35)*100
    gardenRank2.push(item)
})

artRank.forEach(function(item){
    item = (item/12)*100
    artRank2.push(item)
})

storeRank.forEach(function(item){
    item = (item/50)*100
    storeRank2.push(item)
})

//console.log(libRank2)
// console.log(parkRank2)
// console.log(gardenRank2)
// console.log(artRank2)
// console.log(libRank)
//console.log(storeRank2)