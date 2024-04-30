const indent_amount = 20;

const myFiles = [
    'Home',
    'Gallery',
    'Personal',
    [
        'CS280',
        'CS335',
        [
            'Group Project'
        ]
    ],
    'This PC',
    [
        'Windows (C:)',
        'Windows (D:)'
    ]
]

const indent_file = (name, indentLevel) => {
    const fileDiv = document.createElement('div');
    fileDiv.style.marginLeft = indentLevel * indent_amount +'px';
    fileDiv.innerText = name;
    document.body.appendChild(fileDiv);
}

const drawFiles = (files, depth = 0) => {
    if(Array.isArray(files)){
        files.forEach((file) => drawFiles(file, depth+1));
    } else{
        indent_file(files, depth);
    }
}

drawFiles(myFiles);
