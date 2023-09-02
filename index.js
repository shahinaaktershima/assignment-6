const allVideos = async ()=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/videos/categories`)
    const data=await res.json();
   const tabContainer=document.getElementById('tab-container');
   console.log(data.data[0].category);

   const tabData=data.data.slice(0,4);
   console.log(tabData);
tabData.forEach(category => {
    const tabname=document.createElement('div');
    tabname.innerHTML=`<a onclick="showData('${category.category_id}')" class="tab text-xl btn mx-4 hover:bg-red-500 hover:text-white">${category.category}</a>`

    tabContainer.appendChild(tabname)
});
}

const showData=async(id)=>{
console.log(id);
const res=await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
const data=await res.json();
// console.log(data.data);

const cardContainer=document.getElementById("card-container");
cardContainer.textContent="";
if(data.data && data.data.length > 0){
    
    data.data?.forEach(videoDetails => {
    console.log(videoDetails);
    const card=document.createElement('div');
    
    card.innerHTML=`<div class="card  bg-base-100 shadow-xl">
    <figure class="h-1/2"><img class="w-full h-full"  src=${videoDetails.thumbnail} alt="Shoes" /></figure>
    <div class=" flex px-6 py-7 gap-3 ">
      <img class="w-[50px] h-[50px] rounded-full" src=${videoDetails.authors[0].profile_picture}/>
     <div>
     <h2 class="text-2xl font-bold">${videoDetails.title}</h2>
     <p>${videoDetails.authors[0].profile_name}</p> <span>${videoDetails?.authors[0]?.verified}</span>
     <p>views:<span id="view">${videoDetails.others?.views}</span></p>
     </div>
    </div>
  </div>`

  cardContainer.appendChild(card)
});}
else{
    const image=document.createElement("img");
    image.src="./Icon.png";
    image.classList.add("mx-auto");
    cardContainer.appendChild(image)
}

}
const shortView=()=>{
    const views=document.getElementById("view");
    const viewsValue=parseFloat.views;
console.log(viewsValue);
    
}
showData("1000");
allVideos();