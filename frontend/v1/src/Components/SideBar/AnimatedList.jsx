// AnimatedList.jsx
import { motion } from "framer-motion";

export default function AnimatedList({ items, className = "" }) {
  if (!items || !items.length) return null;

  return (
    <ul className={`list-disc list-inside space-y-2 ${className}`}>
      {items.map((text, idx) => (
        <motion.li
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.08, type: "spring", stiffness: 120 }}
          className="text-gray-700"
        >
          {text}
        </motion.li>
      ))}
    </ul>
  );
}
