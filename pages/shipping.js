import { useRouter } from "next/router";
import React from "react";
import { useState, useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import Cookies from "js-cookie";
export default function shipping() {
  const router = useRouter();

  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems, shippingAddress },
  } = state;

  const [fullName, setFullName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [paymentMethod, setPaymentMethod] = useState("Bancolombia");

  useEffect(() => {
    setFullName(shippingAddress.fullName);
    setPhone(shippingAddress.phone);
    setEmail(shippingAddress.email);
    setPaymentMethod(shippingAddress.paymentMethod);
  }, []);

  const submitHandler = ({ fullName, phone, email }) => {
    dispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: { fullName, phone, email },
    });
    dispatch({ type: "SAVE_PAYMENT_METHOD", payload: paymentMethod });

    Cookies.set("shippingAddress", {
      fullName,
      phone,
      email,
    });
    Cookies.set("paymentMethod", paymentMethod);
    router.push("/placeholder");
  };


  return (
    <Layout>
      {cartItems.map((item) => (
        <div className="item-container" key={item._id}>
          <img src={item.image} alt="" />
          <h2>{item.name}</h2>
        </div>
      ))}
      <form action="" className="form-shipping">
        <div>
          <label htmlFor="">Selecciona un metodo de pago</label>

          <label htmlFor="paymentMethod" className="label-content">
            <input
              type="radio"
              name="paymentMethod"
              id="paymentMethod"
              value="Bancolombia"
            />
            <p>
              <i className="bx bx-transfer"></i> Bancolombia
            </p>
          </label>
          <label htmlFor="paymentMethod1" className="label-content">
            <input type="radio" name="paymentMethod" id="paymentMethod1" value="Tarjeta de Credito"/>
            <p>
              <i className="bx bxs-credit-card"></i> Tarjeta de credito
            </p>
          </label>
        </div>
        <div>
          <label htmlFor="">Informacion de contacto</label>
          <input type="text" placeholder="Nombre completo" />
          <input type="text" placeholder="Numero de telefono" />
          <input type="text" placeholder="Correo electronico" />
        </div>

      </form>
      <button onClick={submitHandler}>Ordenar</button>

    </Layout>
  );
}
