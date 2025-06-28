import React, { useState } from "react";
import { PhoneCall } from "lucide-react";

const Button = (props) => (
  <button
    {...props}
    className={`bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 px-6 rounded-full ${props.className || ""}`}
  >
    {props.children}
  </button>
);

export default function App() {
  const [formData, setFormData] = useState({ name: "", date: "", time: "" });
  const [testimonial, setTestimonial] = useState({ name: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed for ${formData.name} on ${formData.date} at ${formData.time}`);
    setFormData({ name: "", date: "", time: "" });
  };

  const handleTestimonialChange = (e) => {
    setTestimonial({ ...testimonial, [e.target.name]: e.target.value });
  };

  const handleTestimonialSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTestimonial({ name: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-gray-100 text-gray-900">
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Clean and Pristine</h1>
        <p className="text-lg mt-1">Premium Mobile Car Detailing Services</p>
      </header>

      <main className="p-8 grid gap-8 max-w-4xl mx-auto">
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Fully mobile service – we come to you</li>
            <li>Eco-friendly products and water-efficient methods</li>
            <li>Interior & exterior detailing packages</li>
            <li>Experienced, insured, and passionate team</li>
          </ul>
        </section>

        <section className="bg-blue-100 rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Services Offered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
            <div className="bg-white p-4 rounded-xl shadow">Exterior Hand Wash</div>
            <div className="bg-white p-4 rounded-xl shadow">Interior Deep Clean</div>
            <div className="bg-white p-4 rounded-xl shadow">Paint Protection</div>
            <div className="bg-white p-4 rounded-xl shadow">Odor Elimination</div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1608645181355-dc73d1c63026?auto=format&fit=crop&w=800&q=80" alt="Car Detailing 1" className="rounded-xl w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1608571428750-718b21f03014?auto=format&fit=crop&w=800&q=80" alt="Car Detailing 2" className="rounded-xl w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1610912763680-f33e7a5f22a2?auto=format&fit=crop&w=800&q=80" alt="Car Detailing 3" className="rounded-xl w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1618836354604-983c98d0c490?auto=format&fit=crop&w=800&q=80" alt="Car Detailing 4" className="rounded-xl w-full h-48 object-cover" />
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Customer Testimonials</h2>
          <div className="space-y-4 text-gray-800">
            <blockquote className="bg-gray-100 p-4 rounded-xl shadow">
              "Amazing service! My car looks brand new. Highly recommend Clean and Pristine!" – Sarah M.
            </blockquote>
            <blockquote className="bg-gray-100 p-4 rounded-xl shadow">
              "They came to my house and detailed my SUV perfectly while I worked. Super convenient." – Jason T.
            </blockquote>
            <blockquote className="bg-gray-100 p-4 rounded-xl shadow">
              "Incredible attention to detail and the team is so professional. Worth every penny." – Amanda K.
            </blockquote>
            <blockquote className="bg-gray-100 p-4 rounded-xl shadow">
              "The best detailing service in Florida. Fast, friendly, and flawless results every time." – Marcus L.
            </blockquote>
          </div>

          <form className="mt-6 space-y-4" onSubmit={handleTestimonialSubmit}>
            <h3 className="text-xl font-semibold">Leave a Testimonial</h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={testimonial.name}
              onChange={handleTestimonialChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl"
            />
            <textarea
              name="message"
              placeholder="Your Review"
              value={testimonial.message}
              onChange={handleTestimonialChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl"
              rows={3}
            ></textarea>
            <Button type="submit" className="w-full">
              Submit Testimonial
            </Button>
            {submitted && <p className="text-green-600 text-sm">Thank you! Your testimonial has been submitted.</p>}
          </form>
        </section>

        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">Book an Appointment</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-xl"
            />
            <Button type="submit" className="w-full">
              Confirm Booking
            </Button>
          </form>
          <p className="text-sm text-gray-600 mt-2 text-center">Available 24 hours a day</p>
        </section>

        <section className="text-center">
          <a href="tel:6562325526">
            <Button className="flex items-center gap-2 mx-auto">
              <PhoneCall className="w-5 h-5" />
              Call Us Now: 656-232-5526
            </Button>
          </a>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 p-4">
        &copy; {new Date().getFullYear()} Clean and Pristine. All rights reserved.
      </footer>
    </div>
  );
}