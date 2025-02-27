import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/checkout/OrderSummary";

const CheckoutPage = () => {
  return (
    <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
      <CheckoutForm />
      <OrderSummary />
    </div>
  );
};

export default CheckoutPage;
