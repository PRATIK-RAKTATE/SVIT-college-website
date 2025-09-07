import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

function AccordionItem({ item, deptId }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center p-5 text-lg font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 cursor-pointer"
      >
        <span>{item.sem}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-2 pb-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {item.subjects.map((sub) => (
                <div
                  key={sub.name}
                  className="flex items-center justify-between px-4 py-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 shadow-sm"
                >
                  <span className="text-sm font-medium">{sub.name}</span>
                  <a
                    href={sub.link}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 px-3 py-1 text-xs bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AccordionItem;
