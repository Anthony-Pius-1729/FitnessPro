import React, { useState } from "react";
import { Star, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TestimonialsAndFAQ = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Tonero",
      role: "Marketing Manager",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExrGzPIdL2YHhEapdqN4ZjunwaYOUNv4qRQ&s",

      rating: 5,
      text: "I lost 25 pounds in 4 months! The workout plans really work and the trainers are super helpful.",
      results: "Lost 25 lbs",
    },
    {
      id: 2,
      name: "Mike",
      role: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Finally built the muscle I wanted! The app makes it easy to track everything.",
      results: "Gained 15 lbs muscle",
    },
    {
      id: 3,
      name: "Emily",
      role: "Teacher",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Love the group classes! Made lots of friends and actually enjoy working out now.",
      results: "40% fitter",
    },
  ];

  const faqData = [
    {
      question: "What's included in each plan?",
      answer:
        "Basic plan has gym access and workouts. Premium adds personal training and meal plans. Elite has everything plus coaching and meal prep.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes! Cancel monthly plans with 30 days notice. Annual plans need 60 days notice. No hidden fees.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "We offer a 7-day free trial with full gym access and one training session. No credit card needed.",
    },
    {
      question: "What if I'm a beginner?",
      answer:
        "Perfect! We help beginners start safely with fitness assessments and beginner-friendly workouts.",
    },
    {
      question: "Are meal plans customizable?",
      answer:
        "Yes! We customize based on your diet preferences, allergies, and goals - vegetarian, keto, gluten-free, etc.",
    },
    {
      question: "What equipment do you have?",
      answer:
        "We have cardio machines, free weights, resistance machines, and functional training areas. All equipment is regularly maintained.",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-gray-50">
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our Members Say
            </h2>
            <p className="text-lg text-gray-600">
              Real results from real people just like you
            </p>
          </div>

          {/* Main Testimonial */}
          <div className="mb-12">
            <Card className="max-w-3xl mx-auto shadow-lg">
              <CardContent className="p-8">
                <div className="text-center">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center mb-4">
                    {renderStars(testimonials[activeTestimonial].rating)}
                  </div>
                  <blockquote className="text-xl text-gray-700 mb-4">
                    "{testimonials[activeTestimonial].text}"
                  </blockquote>
                  <p className="font-semibold text-gray-800">
                    {testimonials[activeTestimonial].name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonials[activeTestimonial].role}
                  </p>
                  <div className="mt-4">
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                      {testimonials[activeTestimonial].results}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveTestimonial(index)}
                className={`p-1 rounded-full transition-all ${
                  index === activeTestimonial
                    ? "ring-4 ring-emerald-300"
                    : "hover:ring-2 hover:ring-gray-300"
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Simple Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600">5,000+</div>
              <div className="text-gray-600">Happy Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600">3+</div>
              <div className="text-gray-600">Years Strong</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about getting started
            </p>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible>
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold text-gray-800">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                We're here to help you get started!
              </p>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsAndFAQ;
