"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, X, Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { path: "/projects", label: "Projects" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 backdrop-blur-md bg-background/60 border-b border-white/5"
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20">
              <Code2 className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xl font-bold gradient-text">Abdul Sami</span>
          </Link>
        </motion.div>

        <div className="flex items-center">
          <div className="hidden md:flex">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant="ghost"
                  className={`relative px-4 py-2 rounded-md transition-all duration-200 ${
                    pathname === item.path
                      ? "text-primary font-medium"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                  asChild
                >
                  <Link href={item.path}>
                    {item.label}
                    {pathname === item.path && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary mx-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground/80"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm  z-50 md:hidden"
            >
              <div className="p-6 bg-background backdrop-blur-md border-l border-r-2 border-white/10">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-lg font-semibold text-primary">
                    Menu
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMobileMenu}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex flex-col space-y-4 ">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Button
                        variant={pathname === item.path ? "default" : "ghost"}
                        className={`w-full justify-start text-lg py-6 ${
                          pathname === item.path
                            ? "bg-primary/10 text-primary"
                            : "text-foreground/80"
                        }`}
                        asChild
                        onClick={toggleMobileMenu}
                      >
                        <Link href={item.path}>{item.label}</Link>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
