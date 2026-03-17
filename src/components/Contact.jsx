import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { motion } from "framer-motion";
import useReveal from "../hooks/useReveal";

const Contact = () => {
  const [ref, visible] = useReveal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
       console.log("From submitted:", formData);
           await emailjs.send("service_ywih8ll","template_w4os8kp", 
        {
          from_name: formData.name,
          to_name: "Sudip",
          from_email: formData.email,
          to_email: "sudip1718mahat@gmail.com",
          form_services: formData.services,
          to_services: "Web Development",
          message: formData.message,
        },
        "Qb7um9ZsLsJuoBoEN"
      );

      setIsLoading(false);
      setFormData({ name: "", email: "", services: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Something went wrong!");
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 px-6 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="max-w-4xl mx-auto text-center mb-12">
        <h3 className="text-3xl font-bold text-cyan-400 mb-4">
          Contact Me
        </h3>
        <p className="text-gray-400">
          Have a project in mind? Let’s build something amazing.
        </p>
      </div>

      <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="youremail@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          {/* Services */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Services
            </label>
            <input
              name="services"
              type="text"
              placeholder="Web Development, UI/UX, etc."
              value={formData.services}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2 text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="What's on your mind?"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition resize-none"
            />
          </div>

          {/* Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition"
          >
            {!isLoading ? "Send Message" : "Sending..."}
          </motion.button>

        </form>
      </div>
    </section>
  );
};

export default Contact;