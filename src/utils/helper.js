 const formatPrice = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);


 const trimInput = (value) => value.trim().replace(/\s+/g, " ");

 export {formatPrice,trimInput }
