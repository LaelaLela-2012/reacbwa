import react from 'react';
import './App.css';
import ReviewItems from './review';
import PropTypes from 'prop-types';


function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="yes" name="DIADORA DORAYAKI" category="LEBARAN" />
      <ReviewItems />

    </div>
  );
}


function FotoProduk() {
  return (
      <div className="Foto">
        <img src="bwa-sneakers.jpg"></img>
      </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount, discount } = props;
  if (isDiscount == "yes") {
    return (
      <p> Discount {discount}% Off</p>
    );
  }
  else if (isDiscount == "coming") {
    return (
      <p>Akan ada diskon... </p>
    );
  }
  else {
    return (
      <p>Belum ada Diskon</p>
    );
  }
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;
  const benefits = ["Tidak kusut terkena Air", "Bahan lebih Halus", "Tidak Gerah"];
  const listBenefits = benefits.map((itemBenefit) =>
    <li key={itemBenefit}>{itemBenefit}</li>)
  return (
  <div>
     <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">Rp. 900.000,-</p>
        <CheckDiscount isDiscount={isDiscount} discount={50} />
        <p className="Info">Lord Ipsum etiam egestas a turpis in sagittis. Aliquam ultricies at magna in pretium. Maecenas nec orci a nunc tempus varius. Praesent vehicula ex eget feugiat luctus. Nam convallis interdum leo, in semper libero suscipit id. Etiam nec velit rutrum, condimentum odio nec, convallis lord. Suspendisse pretium, risus non pellentesque venenatis, massa diam sagittis purus, at tempor ante neque vel lectus. Ut ultricies pulvinar sapien, sed posuere enim placerat ut.</p>
        <ul>
          {listBenefits}
        </ul>
        <a onClick={(e) =>TambahCart(name, e)} href="#">Add to Cart</a>
      </div> 
  </div>
  );
}


function TambahCart(e) {
  return console.log("Membeli " + e);
}


CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired
};

export default App;
