const handleSearch = () => {
  // getting search value
  const searchedName = document.getElementById("searchedName").value;

  // fetch data from API
  const options = {
    method: "GET",
    url: "https://superhero-search.p.rapidapi.com/api/",
    params: { hero: searchedName },
    headers: {
      "X-RapidAPI-Key": "1c6c558fb1msh6fd5db373267f28p16325ejsnbe0871bfe130",
      "X-RapidAPI-Host": "superhero-search.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      const superHero = response.data;
      console.log(superHero);
      document.getElementById("search-form").innerHTML = "";
      document.getElementById("result-container").innerHTML = `
        <div class="flex justify-evenly bg-gray-200 h-screen">
        <div>
          <img
            src="https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/69-batman.jpg"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-evenly">
          <h2 class="text-2xl">
            <span class="font-semibold">Name:</span> ${superHero?.name}
          </h2>
          <h3 class="text-2xl">
            <span class="font-semibold">Publisher:</span> ${
              superHero?.biography?.publisher
            }
          </h3>
          <h3 class="text-2xl">
            <span class="font-semibold">Gender:</span> ${
              superHero?.appearance?.gender
            }
          </h3>

          <div>
            <h3 class="text-2xl font-semibold mb-2">Power Stats:</h3>
            <table class="border border-collapse border-slate-300">
              <thead>
                <th class="border border-slate-300 px-4 py-2">Intelligence</th>
                <th class="border border-slate-300 px-4 py-2">Strength</th>
                <th class="border border-slate-300 px-4 py-2">Speed</th>
                <th class="border border-slate-300 px-4 py-2">Durability</th>
                <th class="border border-slate-300 px-4 py-2">Power</th>
                <th class="border border-slate-300 px-4 py-2">Combat</th>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-slate-300 px-4 py-2 text-center">
                  ${superHero?.powerstats?.intelligence}
                  </td>
                  <td class="border border-slate-300 px-4 py-2 text-center">
                  ${superHero?.powerstats?.strength}
                  </td>
                  <td class="border border-slate-300 px-4 py-2 text-center">
                  ${superHero?.powerstats?.speed}
                  </td>
                  <td class="border border-slate-300 px-4 py-2 text-center">
                  ${superHero?.powerstats?.durability}
                  </td>
                  <td class="border border-slate-300 px-4 py-2 text-center">
                  ${superHero?.powerstats?.power}
                  </td>
                  <td class="border border-slate-300 px-4 py-2 text-center">
                  ${superHero?.powerstats?.combat}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2 class="text-2xl font-semibold mb-2">Aliases:</h2>
            <p>
            ${superHero?.biography?.aliases?.join(", ")}
            </p>
          </div>
        </div>
      </div>
  `;
    })
    .catch(function (error) {
      console.error(error);
    });
};
