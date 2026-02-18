// MobileMenu.tsx
interface MobileMenuProps {
  navItems: { id: string; label: string }[];
  activeSection: string;
  onClose: () => void;
}

export const MobileHeader: React.FC<MobileMenuProps> = ({
  navItems,
  activeSection,
  onClose,
}) => {
  return (
    <div
      className="
        md:hidden
        mt-3
        max-w-5xl mx-auto
        bg-white/10 backdrop-blur-xl 
        border border-white/20 
        rounded-xl 
        px-6 py-4 
        shadow-xl shadow-black/20
      "
    >
      <div className="flex flex-col gap-4 text-white text-lg">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`px-1 ${
              activeSection === item.id ? "text-cyan-400" : ""
            }`}
            onClick={onClose}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};
