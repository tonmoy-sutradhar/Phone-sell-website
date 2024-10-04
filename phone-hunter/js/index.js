const loadAllPhones = async (status, brandName) => {
  // console.log(brandName);
  document.getElementById("spinner").style.display = "none";

  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${
      brandName ? brandName : "iphone"
    }`
  );
  const data = await res.json();
  console.log(data);
  if (status) {
    displayAllPhones(data.data);
  } else {
    displayAllPhones(data.data.slice(0, 6));
  }
};

const displayAllPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  console.log(phones);

  phones.forEach((phone) => {
    const { brand, image, slug } = phone;
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card bg-base-100 w-96 m-2 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src=${image}
      alt="Shoes"
      class="rounded-xl" />
   </figure>
     <div class="card-body items-center text-center">
      <h2 class="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
       </div>
     </div>
    </div>
    `;
    phoneContainer.appendChild(div);
  });
};

const handleSearch = () => {
  document.getElementById("spinner").style.display = "block";
  const searchText = document.getElementById("searchBox").value;

  setTimeout(function () {
    loadAllPhones(false, searchText);
  }, 2000);
};

const handleShowAll = () => {
  loadAllPhones(true);
};

loadAllPhones(false, "iphone");
