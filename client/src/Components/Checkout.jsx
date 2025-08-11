import React, { useState } from "react";
import {
  CreditCard,
  Lock,
  ShoppingBag,
  MapPin,
  User,
  Mail,
  Phone,
  Zap,
  Trophy,
  Heart,
  Target,
} from "lucide-react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.cardNumber) newErrors.cardNumber = "Card number is required";
    if (!formData.expiryDate) newErrors.expiryDate = "Expiry date is required";
    if (!formData.cvv) newErrors.cvv = "CVV is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("FitnessPro subscription activated:", formData);
      alert("Welcome to FitnessPro! Your fitness journey starts now! 🚀");
    }
  };

  const subscriptionItems = [
    {
      id: 1,
      name: "Premium Workout Plans",
      price: 29.99,
      duration: "monthly",
      icon: "💪",
      description: "Access to 500+ workouts & personal trainer guidance",
    },
    {
      id: 2,
      name: "Custom Meal Plans",
      price: 19.99,
      duration: "monthly",
      icon: "🥗",
      description: "Personalized nutrition plans based on your goals",
    },
    {
      id: 3,
      name: "Progress Tracking Pro",
      price: 9.99,
      duration: "monthly",
      icon: "📊",
      description: "Advanced analytics and body composition tracking",
    },
  ];

  const subtotal = subscriptionItems.reduce((sum, item) => sum + item.price, 0);
  const discount = subtotal * 0.15; // 15% first month discount
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-green-500 rounded-full p-3 mr-3">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">FitnessPro</h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Start Your Fitness Journey
          </h2>
          <div className="flex items-center justify-center text-sm text-gray-600">
            <Lock className="w-4 h-4 mr-2 text-green-500" />
            Secure Checkout • Cancel Anytime
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <User className="w-5 h-5 mr-2 text-green-500" />
                  Account Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${
                        errors.email
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-green-500"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-green-500" />
                  Personal Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${
                        errors.firstName
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-green-500"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${
                        errors.lastName
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-green-500"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number (optional)"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Billing Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-green-500" />
                  Billing Address
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <input
                      type="text"
                      name="address"
                      placeholder="Street address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="ZIP Code"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-green-500" />
                  Payment Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${
                        errors.cardNumber
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-green-500"
                      }`}
                    />
                    {errors.cardNumber && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.cardNumber}
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="cardName"
                      placeholder="Cardholder name"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${
                          errors.expiryDate
                            ? "border-red-300 focus:border-red-500"
                            : "border-gray-200 focus:border-green-500"
                        }`}
                      />
                      {errors.expiryDate && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.expiryDate}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${
                          errors.cvv
                            ? "border-red-300 focus:border-red-500"
                            : "border-gray-200 focus:border-green-500"
                        }`}
                      />
                      {errors.cvv && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.cvv}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subscription Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-8 h-fit">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-green-500" />
              Your Fitness Package
            </h3>

            <div className="space-y-4 mb-6">
              {subscriptionItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 border border-green-100 rounded-xl bg-green-50"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{item.icon}</div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.description}
                        </p>
                        <div className="flex items-center mt-2">
                          <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                            {item.duration.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">${item.price}</p>
                      <p className="text-xs text-gray-500">per month</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Monthly Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-green-600 font-semibold">
                <span>First Month Discount (15%)</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-xl font-bold text-gray-900">
                  <span>First Month Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Then ${subtotal.toFixed(2)}/month • Cancel anytime
                </p>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Zap className="w-5 h-5" />
              <span>Start My Fitness Journey</span>
            </button>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                🔒 Secure payment • 30-day money-back guarantee
              </p>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <div className="text-center">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center justify-center">
                  <Target className="w-4 h-4 mr-2" />
                  What's Included
                </h4>
                <ul className="text-sm text-green-700 space-y-2">
                  <li className="flex items-center justify-center">
                    <span className="mr-2">💪</span> 500+ Expert-designed
                    workouts
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="mr-2">🥗</span> Personalized meal planning
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="mr-2">📱</span> Mobile app access
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="mr-2">📊</span> Progress tracking &
                    analytics
                  </li>
                  <li className="flex items-center justify-center">
                    <span className="mr-2">👨‍💼</span> 24/7 trainer support
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Terms of Service and Privacy
                Policy. Your subscription will automatically renew monthly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
