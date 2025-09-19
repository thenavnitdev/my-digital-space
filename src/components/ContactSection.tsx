import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "srnavaneet@gmail.com",
      href: "mailto:srnavaneet@gmail.com",
      color: "bg-blue-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9415807415",
      href: "tel:+919415807415",
      color: "bg-green-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/navnitkumar",
      href: "https://github.com",
      color: "bg-gray-700",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/navnitkumar",
      href: "https://linkedin.com",
      color: "bg-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                and creative collaborations. Whether you need a full-stack developer 
                or just want to say hello, I'd love to hear from you.
              </p>
              
              <div className="inline-flex items-center space-x-2 mb-8">
                <Badge className="bg-green-500 hover:bg-green-600">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                  Available for freelance work
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="block"
                >
                  <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className={`p-3 rounded-lg ${info.color}`}>
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="hover:text-primary transition-colors">{info.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                <MapPin className="h-4 w-4" />
                <p className="text-sm">Based in India</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Available for remote work worldwide
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project inquiry"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="bg-background/50 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700 group"
                  >
                    <Send className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
                    Send Message
                  </Button>
                </form>
                
                <p className="text-xs text-muted-foreground text-center mt-6">
                  I'll get back to you within 24 hours
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}