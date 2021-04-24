const clientId = "3USSZaCdslRHekEdcmVVYg";

const apiKey =
  "q9dBzTa_Jo0yWZsFeLugXlWPm0RY1pkSBkQzzZIImIPmYfyMvCkql1lQmGecAOHV7Dz5_8ZpmbEbdu5kds5Ntfw-DsrCGDYyGG5klfBFwoFUdowlHlZC2LQpb_uCYHYx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.businesses) {
          return data.businesses.map((business) => {
            console.log(data);
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              adress: business.adress1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        } else {
          return <h2>HaHaHa</h2>;
        }
      })
      .catch(() => console.log("hahaha"));
  },
};

export default Yelp;
