const indent_amount = 20; 

const myFiles = [ //create main array
    'Home', //String
    'Gallery',
    'Personal',
    [ //indented array
        'CS280',
        'CS335',
        [ // indented indented array
            'Group Project'
        ]
    ],
    'This PC',
    [
        'Windows (C:)',
        'Windows (D:)'
    ]
]

//function for basic html and css created with js
const indent_file = (name, indentLevel) => {
    const fileDiv = document.createElement('div'); //creates <div></div>
    fileDiv.style.marginLeft = indentLevel * indent_amount +'px'; //math for indents
    fileDiv.innerText = name;
    document.body.appendChild(fileDiv);
}

//recursive function for selecting file
const drawFiles = (files, depth = 0) => {
    if(Array.isArray(files)){ //check if current input is an indented array
        files.forEach((file) => drawFiles(file, depth+1)); //call its on every element of indented array
    } else{ //if not indented array call indent_file
        indent_file(files, depth);
    }
}

drawFiles(myFiles); //calls main function


//Coded following along with Web Dev Cody on youtube, https://www.youtube.com/watch?v=TnniSf9mtzA&ab_channel=WebDevCody
