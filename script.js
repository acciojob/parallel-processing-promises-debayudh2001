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
	let spinner = document.createElement("div")
	spinner.id = "loading"
	output.append(spinner)
	let promises = []
	for(let v of arr){
		promises.push(downloadImage(v.url))
	}
	Promise.all(promises).then(() => {
		//console.log("Loaded")
		spinner.style.display = "none"
		for(let i=0; i<arr.length; i++){
			let link = document.createElement('a');
			link.href = 'path/to/image'
            link.download = `image${i+1}.jpg`;    
			//link.click()
			let img = document.createElement('img');
			img.src = arr[i].url
			output.append(img)
		}        
	}).catch(() => {
		//console.log("Error occured while downloading")
		let error = document.createElement('div');
		error.id = "error"
		error.innerText = "Error occured while downloading"
		output.append(error)
	})
}

btn.addEventListener("click", () => downloadImages(images))