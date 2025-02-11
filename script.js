//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(url) {
	let p = new Promise((res, rej) => {
		res(fetch(url))
	})
	return p
}
function downloadImages(arr){
	let promises = []
	for(let v of arr){
		promises.push(downloadImage(v.url))
	}
	Promise.all(promises).then(() => {
		console.log("Loaded")
		for(let i=1; i<=arr.length; i++){
			let link = document.createElement('a');
		    link.href = `path/to/image${i}`
            link.download = `image${i}.jpg`;    
			link.click()
			let img = document.createElement('img');
			img.src = "C:\Users\Debayudh"
			output.append(img)
		}        
	}).catch(() => {
		console.log("Error occured while downloading")
	})
}

//downloadImages(images)