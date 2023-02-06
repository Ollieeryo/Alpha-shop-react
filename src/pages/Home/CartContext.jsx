import { createContext, useContext, useState } from "react";

const initialProducts = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

// 定義 context
// 定義裡面的各項屬性是為了明確和預防錯誤
const IniProducts = createContext({
  products: initialProducts,
  setProducts: () => {},
  total: 0,
  setTotal: () => {},
});

const PaymentContext = createContext({
  cardHolderName: "",
  cardNumber: "",
  validDate: "",
  CCV: "",
});

// 提供 初始商品資料 provider
export const ProductDataProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);
  const [total, setTotal] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);

  // 在 componentDidUpdate 生命週期中更新總金額
  // 這個是另一種方法
  // useEffect(() => {
  //   const newTotal = products.reduce((acc, product) => acc + product.price, 0);
  //   setTotal(newTotal);
  //   }, [products])

  return (
    <IniProducts.Provider
      value={{
        initialProducts,
        products,
        setProducts,
        total,
        setTotal,
        shippingFee,
        setShippingFee,
      }}
    >
      {children}
    </IniProducts.Provider>
  );
};

// 提供 信用卡資料 provider
export const PaymentDataProvider = ({ children }) => {
  const [paymentData, setPaymentData] = useState({
    cardHolderName: "",
    cardNumber: "",
    validDate: "",
    CCV: "",
  });

  return (
    <PaymentContext.Provider value={{ paymentData, setPaymentData }}>
      {children}
    </PaymentContext.Provider>
  );
};

// 使用 useContext Hook
export const useProductData = () => {
  const productData = useContext(IniProducts);
  return productData;
};

export const usePaymentData = () => {
  const paymentData = useContext(PaymentContext);
  return paymentData;
};
