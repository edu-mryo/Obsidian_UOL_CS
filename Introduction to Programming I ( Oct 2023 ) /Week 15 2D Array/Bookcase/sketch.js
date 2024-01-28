var myBookShelf =
[
	["Pride and Prejudice", "Jane Eyre", "Wuthering Heights", "Gone with the Wind", "The Notebook"],
	["Dracula", "Frankenstein", "The Shining", "IT" ,"The Haunting of Hill House"],
	["Bridget Jones's Diary", "Catch-22", "The Hitchhiker's Guide to the Galaxy", "Good Omens", "Me Talk Pretty One Day"],
	["The 7 Habits of Highly Effective People", "How to Win Friends and Influence People", "Think and Grow Rich", "The Power of Now", "Atomic Habits"]
];


function setup() {
	createCanvas(800, 600);
	myBookShelf;

	firstBooks(myBookShelf);

	countBooks(myBookShelf);

	printBooks(myBookShelf)

	printRows(myBookShelf,6)

	titleSearch(myBookShelf,"Bridget Jones's Diary")


	



};



function draw() {

};

//Call the first book from each bookshelf
function firstBooks(shelf){
	for(var i =0; i<shelf.length ;i++){
		console.log(shelf[i][0]);
	}
};

//Cound all the books
function countBooks(shelf){
	var count = 0;
	for(var i=0;i<shelf.length;i++){
		//Option 1 
		// for(var j=0; j<shelf[i].length;j++){
		// 	count+=1;
		// }
		
		//Option 2
		count += shelf[i].length
	}
	console.log(count);
};

//Print All Stored Book
function printBooks(shelf){
	for(var i=0;i<shelf.length;i++){
		for(var j=0;j<shelf[i].length;j++){
			console.log(shelf[i][j]);
		}
	}
}

//Print out specific row
function printRows(myBookShelf,i){
	if(i>=myBookShelf.length){
		console.log('Out of bounds. Please specify index within the length')
	}else{
	console.log(myBookShelf[i])}
}

//Take a book name as a parameter and print the shelf location to the console.
function titleSearch(myBookShelf,title){
	var isFound = false;
	for(var i=0;i<myBookShelf.length;i++){
		for(var j=0;j<myBookShelf[i].length;j++){
			if(myBookShelf[i][j]==title){
				isFound = true;
				console.log(`Found the book "${title}". It is located in shelf ${i} and row ${j}`)
				return
			}
		}
	}
	if(!isFound){
		console.log(`The book "${title}" was not found`)
	}
}