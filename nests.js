//We will make nested objects:
var storage= {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = storage.car.inside["glove box"];
console.log(gloveBoxContents)

//nested array:

var myPlants = [
    {
        type : "flowers",
        list : ["rose", 
                "tulip",
                "dandelion"
    ]
    },
    {
        type: "trees",
        list: ["fir", "pine", "oak"], 
    }
];
var secondtree = myPlants[1].list[0];
console.log(secondtree);

var collection ={
    "2548": {
        "album": "slippery when wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You give love a bad name"
        ] 
    },
    "2468": {
        "album": "1999",
        "artist": "prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
     "5439": {
        "album": "ABBA Gold"
     }
};
var collectioncopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === "") {
      delete collection[id][prop];
    } else if (prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection [id][prop] = value;
    }

    return collection;
}
updateRecords(2468, "tracks", "test")
console.log(updateRecords(5439, "artist", " ABBA"));
