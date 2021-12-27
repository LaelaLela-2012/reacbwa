import react from 'react';
import './App.css';


function review() {
  // Mempersiapkan data dummy JSON
  const users = [
    {
      "id": 1,
      "name": "Masayoshi",
      "review": "Harganya murah tapi ga murahan. Keren nih!",
      "foto": "https://images.pexels.com/photos/3220360/pexels-photo-3220360.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      "id": 2,
      "name": "Masayuk",
      "review": "Kereennn, murah dan berkualitas!",
      "foto" : "https://images.pexels.com/photos/5046546/pexels-photo-5046546.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      "id": 3,
      "name": "Cong Peiyong",
      "review": "Very Good shoes i've ever bought",
      "foto" :"https://images.pexels.com/photos/4662950/pexels-photo-4662950.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    }
  ];
  const listReviews = users.map((itemReview) =>
    <div key={itemReview.id} className="Item">
      <img src={itemReview.foto} />
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
  );
  return (
    <div className="Review-box">
        <h2>Reviews123</h2>
        {listReviews}
      </div>
  );

}


export default review;
