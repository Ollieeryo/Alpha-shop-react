import { ReactComponent as Minus } from "../public/minus.svg";
import { ReactComponent as Plus } from "../public/plus.svg";
import cart from "./cart.module.scss";
import { useProductData } from "../CartContext";

function ListSection() {
  // useContext Hook
  const { initialProducts, products, setProducts, setTotal, shippingFee } =
    useProductData();

  // 如果在 context 檔案中使用 useEffect 可以不用使用下面的計算金額方法
  const newTotal =
    products.reduce((acc, product) => {
      // 在 callback function 中使用原始價格乘上數量來計算產品的總金額，並且加上 shipping fee
      const productTotal =
        initialProducts.find((p) => p.id === product.id).price *
        product.quantity;
      return acc + productTotal;
    }, 0) + shippingFee;
  setTotal(newTotal);

  // 設置 加減按鈕更改 product state
  function handlePlusClick(productId, initialProducts) {
    const initialProduct = initialProducts.find((p) => p.id === productId);
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          const newQuantity = product.quantity + 1;
          return {
            ...product,
            quantity: newQuantity,
            price: initialProduct.price * newQuantity,
          };
        } else {
          return product;
        }
      })
    );
  }

  function handleMinusClick(productId, initialProducts) {
    const initialProduct = initialProducts.find((p) => p.id === productId);
    setProducts(
      products.map((product) => {
        if (product.quantity > 0 && product.id === productId) {
          const newQuantity = product.quantity - 1;
          return {
            ...product,
            quantity: newQuantity,
            price: initialProduct.price * newQuantity,
          };
        } else {
          return product;
        }
      })
    );
  }

  return products.map((product) => {
    const initialProduct = initialProducts.find((p) => p.id === product.id);
    const initialPrice = initialProduct.price;
    return (
      <li key={product.id} className={cart.list}>
        <div className={cart.imgWrap}>
          <img src={product.img} alt={product.name} className={cart.img} />
        </div>

        <div>
          <div className={cart.infoWrap}>
            <p>{product.name}</p>
            <span className={cart.price}>
              ${initialPrice * product.quantity}
            </span>
          </div>

          <div className={cart.buttonWrap}>
            <button
              className={cart.logo}
              onClick={() => {
                handleMinusClick(product.id, initialProducts);
              }}
            >
              <Minus width="1rem" />
            </button>
            <span className={cart.number}>{product.quantity}</span>
            <button
              className={cart.logo}
              onClick={() => {
                handlePlusClick(product.id, initialProducts);
              }}
            >
              <Plus width="1rem" />
            </button>
          </div>
        </div>
      </li>
    );
  });
}

function TotalItem() {
  // useContext
  const { total } = useProductData();
  const { shippingFee } = useProductData();

  // 設置 shipping 方式渲染字串
  let shipping;
  if (shippingFee === 0) {
    shipping = "免費";
  } else if (shippingFee === 500) {
    shipping = "$500";
  }

  return (
    <>
      <div className={cart.line}></div>
      <div className={cart.totalTitle}>
        <span>運費</span>
        <span className={cart.price}>{shipping}</span>
      </div>
      <div className={cart.line}></div>
      <div className={cart.totalTitle}>
        <span>小記</span>
        <span className={cart.price}>${total}</span>
      </div>
    </>
  );
}

export default function Cart({ theme }) {
  const darkBackground = theme ? cart["darkBackground"] : null;
  return (
    <div className={cart.cartContainer} id={darkBackground}>
      <div className={cart.cartBox}>
        <h3 className={cart.cartTitle}>購物籃</h3>
        <div className={cart.listWrap}>
          <ul>
            <ListSection />
          </ul>
        </div>
      </div>

      <div className={cart.totalWrap}>
        <TotalItem />
      </div>
    </div>
  );
}
