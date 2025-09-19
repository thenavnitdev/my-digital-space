import { motion } from "motion/react";
import { Heart, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Navnit Kumar. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-start mt-1">
              Made with <Heart className="h-3 w-3 mx-1 text-red-500 fill-current" /> using React & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-sm text-muted-foreground">
              MERN Stack Developer
            </p>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full group"
            >
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
